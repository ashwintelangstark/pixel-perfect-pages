import { useEffect, useRef, useState } from "react";
import poster from "@/assets/nova-hero-poster.jpg.asset.json";
import mirror from "@/assets/nova-hero.mp4.asset.json";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4";

export function ScrollVideo() {
  const visibleRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [cacheReady, setCacheReady] = useState(false);

  useEffect(() => {
    const video = visibleRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    let cancelled = false;
    let frameId = 0;
    let target = 0;
    let smoothed = 0;
    let bitmaps: ImageBitmap[] = [];
    const extractionVideo = document.createElement("video");
    extractionVideo.muted = true;
    extractionVideo.playsInline = true;
    extractionVideo.preload = "auto";
    extractionVideo.crossOrigin = "anonymous";

    const updateTarget = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      target = range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0;
    };
    const draw = (bitmap: ImageBitmap) => {
      const context = canvas.getContext("2d");
      if (!context) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
      }
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const scale = Math.max(width / bitmap.width, height / bitmap.height);
      const imageWidth = bitmap.width * scale;
      const imageHeight = bitmap.height * scale;
      context.drawImage(bitmap, (width - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight);
    };
    const animate = () => {
      smoothed += (target - smoothed) * 0.12;
      if (bitmaps.length) {
        draw(bitmaps[Math.min(bitmaps.length - 1, Math.round(smoothed * (bitmaps.length - 1)))]);
      } else if (video.readyState >= 2 && Number.isFinite(video.duration)) {
        const time = smoothed * Math.max(0, video.duration - 0.05);
        if (!video.seeking && Math.abs(video.currentTime - time) > 0.04) video.currentTime = time;
      }
      frameId = requestAnimationFrame(animate);
    };

    const waitForEvent = (element: HTMLVideoElement, event: string) => new Promise<void>((resolve, reject) => {
      const timeout = window.setTimeout(() => { cleanup(); reject(new Error("Video load timed out")); }, 12000);
      const cleanup = () => { clearTimeout(timeout); element.removeEventListener(event, onEvent); element.removeEventListener("error", onError); };
      const onEvent = () => { cleanup(); resolve(); };
      const onError = () => { cleanup(); reject(new Error("Video failed to load")); };
      element.addEventListener(event, onEvent, { once: true });
      element.addEventListener("error", onError, { once: true });
    });

    const extract = async () => {
      try {
        if (video.readyState < 2) await waitForEvent(video, "loadeddata");
        if (cancelled) return;
        setVideoReady(true);
        await new Promise(resolve => setTimeout(resolve, 300));
        extractionVideo.src = mirror.url;
        extractionVideo.load();
        if (extractionVideo.readyState < 2) await waitForEvent(extractionVideo, "loadeddata");
        const duration = extractionVideo.duration;
        if (!Number.isFinite(duration) || !duration) return;
        const count = Math.min(90, Math.max(24, Math.round(duration * 12)));
        const width = Math.min(960, extractionVideo.videoWidth);
        const height = Math.round(width * extractionVideo.videoHeight / extractionVideo.videoWidth);
        const frameCanvas = document.createElement("canvas");
        frameCanvas.width = width;
        frameCanvas.height = height;
        const context = frameCanvas.getContext("2d");
        if (!context) return;
        const frames: ImageBitmap[] = [];
        for (let index = 0; index < count && !cancelled; index++) {
          const time = (index / (count - 1)) * Math.max(0, duration - 0.05);
          if (Math.abs(extractionVideo.currentTime - time) > 0.01) {
            const seek = waitForEvent(extractionVideo, "seeked");
            extractionVideo.currentTime = time;
            await seek;
          }
          context.drawImage(extractionVideo, 0, 0, width, height);
          frames.push(await createImageBitmap(frameCanvas));
        }
        if (cancelled) { frames.forEach(frame => frame.close()); return; }
        bitmaps = frames;
        draw(bitmaps[Math.round(smoothed * (bitmaps.length - 1))]);
        setCacheReady(true);
      } catch {
        // Seeking the visible video remains the fallback when frame extraction is unavailable.
      }
    };

    updateTarget();
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);
    frameId = requestAnimationFrame(animate);
    void extract();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      extractionVideo.removeAttribute("src");
      extractionVideo.load();
      bitmaps.forEach(frame => frame.close());
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background pointer-events-none" aria-hidden="true">
      <img src={poster.url} alt="" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady || cacheReady ? "opacity-0" : "opacity-100"}`} />
      <video ref={visibleRef} src={VIDEO_URL} muted playsInline preload="auto" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady && !cacheReady ? "opacity-100" : "opacity-0"}`} />
      <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${cacheReady ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}