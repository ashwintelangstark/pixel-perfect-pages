import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  ArrowDownRight,
  Binary,
  Blocks,
  Bot,
  Brain,
  ChevronRight,
  CircleDot,
  Cpu,
  Database,
  Eye,
  Globe2,
  Hexagon,
  Languages,
  MonitorUp,
  Network,
  TerminalSquare,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollVideo } from "@/components/scroll-video";
import coreNucleus from "@/assets/january/core-nucleus.png";
import agentCursor from "@/assets/january/agent-cursor.png";
import threeDSynthesis from "@/assets/january/three-d-synthesis.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JANUARY — Local, Autonomous, Expressive" },
      {
        name: "description",
        content:
          "January is an emotionally expressive, local autonomous AI companion for macOS. It sees, listens, reasons, acts, remembers, and creates in 3D.",
      },
      { property: "og:title", content: "JANUARY — Local, Autonomous, Expressive" },
      {
        property: "og:description",
        content:
          "A local macOS companion with multimodal perception, dynamic model routing, computer use, native 3D generation, and expressive voice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Detail = { label: string; title: string; body: string };
type Flow = { inputs: string[]; core: string; outputs: string[]; caption: string };

type AtlasModule = {
  id: string;
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  summary: string;
  detail: string;
  items: Detail[];
  flow: Flow;
  Icon: typeof Brain;
  art?: { src: string; alt: string; className?: string };
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const modules: AtlasModule[] = [
  {
    id: "architecture",
    number: "01",
    eyebrow: "Master system architecture",
    title: (
      <>
        A companion that
        <br />
        meets the real world.
      </>
    ),
    summary:
      "January links physical input, local state, a dynamic intelligence layer, and tangible output in one continuous system.",
    detail:
      "The system begins with the MacBook microphone, camera, terminal, and optional floor-plan imagery. Its daemon coordinates the resulting signal through listening, reasoning, memory, safety, and synthesis layers so a spoken thought can become an answer, a desktop action, a 3D scene, or a natural voice response without breaking the thread of the conversation.",
    items: [
      {
        label: "INPUT",
        title: "Physical perception",
        body: "A 16 kHz microphone, native AVFoundation camera stream, terminal REPL, and blueprint files give January a direct view of both the room and the work.",
      },
      {
        label: "STATE",
        title: "Local coordination",
        body: "Voice activity detection, Faster-Whisper, wake and sleep handling, and a working state machine coordinate passive, listening, working, speaking, and sleeping modes.",
      },
      {
        label: "REASON",
        title: "Connected intelligence",
        body: "Dynamic routing, web and weather access, coding tools, emotional context, and model fallbacks route each task to the capability that best fits it.",
      },
      {
        label: "OUTPUT",
        title: "A physical response",
        body: "January can speak through the Mac, take bounded computer actions, create Blender assets, or return detailed answers in the terminal.",
      },
    ],
    flow: {
      inputs: ["Microphone", "Camera eyes", "Terminal + plans"],
      core: "JANUARY CORE",
      outputs: ["Voice", "Desktop action", "3D + code"],
      caption: "Perceive → coordinate → reason → act",
    },
    Icon: Network,
    art: {
      src: coreNucleus,
      alt: "Generated floating January intelligence nucleus",
      className: "motion-art--core",
    },
  },
  {
    id: "routing",
    number: "02",
    eyebrow: "Dynamic AI model router · 458+ models",
    title: (
      <>
        The right mind
        <br />
        for the moment.
      </>
    ),
    summary:
      "January’s router is designed to preserve momentum when a task changes, a model is preferred, or a provider needs a fallback.",
    detail:
      "Every request passes through an intent check. A user can lock a chosen model for the session, ask what model is active, browse free choices, or reset to automatic routing. In automatic mode, January begins with its primary Gemini tier, falls through to a second Gemini tier when needed, then selects from an indexed OpenRouter and OmniRoute capability catalog spanning reasoning, vision, coding, fast response, and zero-cost models.",
    items: [
      {
        label: "TIER 1",
        title: "Primary Gemini",
        body: "Gemini Flash and Pro provide the default path for responsive multimodal work and general intelligence.",
      },
      {
        label: "TIER 2",
        title: "Automatic fallback",
        body: "A second Gemini key keeps the conversation moving through quota or provider interruptions.",
      },
      {
        label: "TIER 3",
        title: "Capability cascade",
        body: "The 458+ model catalog can select specialist pools such as Qwen and DeepSeek for code, Gemini and vision models for camera work, or R1-class reasoning models for planning.",
      },
      {
        label: "CONTROL",
        title: "Session model lock",
        body: "Commands such as “switch model to DeepSeek R1,” “list free models,” and “reset model” make the routing decision visible and steerable.",
      },
    ],
    flow: {
      inputs: ["Voice command", "Typed prompt", "Camera task"],
      core: "INTENT + ROUTER",
      outputs: ["Reasoning pool", "Vision pool", "Coding pool"],
      caption: "Lock a model, or let January select the fit",
    },
    Icon: Brain,
  },
  {
    id: "computer-use",
    number: "03",
    eyebrow: "Computer-using agent · phase 1",
    title: (
      <>
        Language that
        <br />
        reaches the desktop.
      </>
    ),
    summary:
      "January translates an instruction into visible macOS action while keeping a safety interlock at the center of the path.",
    detail:
      "The computer-using agent does not treat the desktop as an abstract API. It generates humanized quadratic Bézier cursor paths, physical clicks, drag strokes, natural per-character typing, shortcut chords, and managed application windows. Before any action, the SafetyInterlock checks native screen bounds and the emergency halt condition: moving the pointer to the top-left corner or pressing Ctrl+C stops the active sequence immediately.",
    items: [
      {
        label: "SAFETY",
        title: "Emergency halt",
        body: "The top-left corner at x ≤ 10 and y ≤ 10 is a global stop zone. Coordinate clamping prevents actions from leaving the physical display.",
      },
      {
        label: "MOTION",
        title: "Humanized cursor paths",
        body: "Mouse movement follows smooth Bézier trajectories with small deviations instead of teleporting between points.",
      },
      {
        label: "KEYBOARD",
        title: "Natural strokes",
        body: "Typing uses a varied cadence, while shortcuts can execute complete chords such as cmd+s or cmd+shift+p.",
      },
      {
        label: "WINDOWS",
        title: "Intent in view",
        body: "Window management can launch an app, bring it forward, center it, and keep the action legible on screen.",
      },
    ],
    flow: {
      inputs: ["Natural instruction", "Screen bounds", "Halt signal"],
      core: "SAFETY INTERLOCK",
      outputs: ["Mouse paths", "Typing + shortcuts", "Window focus"],
      caption: "Every desktop action passes through the same safety gate",
    },
    Icon: Bot,
    art: {
      src: agentCursor,
      alt: "Generated January computer-use cursor object",
      className: "motion-art--cursor",
    },
  },
  {
    id: "blender",
    number: "04",
    eyebrow: "Native Blender bridge · phase 2",
    title: (
      <>
        Make the object.
        <br />
        Open the world.
      </>
    ),
    summary:
      "January turns a request into a procedural Blender scene, then hands the result back in formats made to travel.",
    detail:
      "A 3D request is interpreted as an object or scene intent, then converted into procedural mesh instructions, PBR material choices, studio lighting, a 35 mm presentation camera, and a Blender project. January can build cyberpunk swords, mugs, sports cars, chairs, vases, and torus sculptures, then save the native .blend project alongside universal .obj/.mtl and realtime .glb exports before opening Blender on the Mac.",
    items: [
      {
        label: "MESH",
        title: "Procedural presets",
        body: "Generate dual-tone plasma swords, solidified ceramic mugs, low-poly vehicles, minimal chairs, porcelain forms, and parametric torus knots.",
      },
      {
        label: "MATERIAL",
        title: "PBR by default",
        body: "Principled shading defines metallic, roughness, specular, glass, and emissive behavior rather than leaving models as plain geometry.",
      },
      {
        label: "PRESENT",
        title: "Lit to inspect",
        body: "A three-point studio setup with key, rim, fill, and a composed camera makes every generated object immediately readable.",
      },
      {
        label: "EXPORT",
        title: "Keep it usable",
        body: "Each asset is written as .blend for Blender, .obj + .mtl for universal interchange, and .glb for web and realtime contexts.",
      },
    ],
    flow: {
      inputs: ["Voice prompt", "Object preset", "Reference intent"],
      core: "BLENDER BRIDGE",
      outputs: ["Procedural mesh", "PBR scene", ".blend · .obj · .glb"],
      caption: "Describe a thing → synthesize it → open it natively",
    },
    Icon: Blocks,
    art: {
      src: threeDSynthesis,
      alt: "Generated January 3D and BIM synthesis object",
      className: "motion-art--object",
    },
  },
  {
    id: "precision",
    number: "05",
    eyebrow: "Precision engineering + universal 3D",
    title: (
      <>
        Grounded detail,
        <br />
        built in 3D.
      </>
    ),
    summary:
      "For real machines and ambitious custom forms, January shifts from a preset to specification-led synthesis.",
    detail:
      "January’s technical grounding engine first looks for a curated iconic reference, then can extract dimensional telemetry from the web for unfamiliar subjects. Its BMesh kernel constructs station-lofted fuselages, NACA and supercritical airfoils, sweep, dihedral, washout, nacelles, windows, cockpit glazing, PBR surfaces, and studio presentation. The universal engine extends the same approach beyond aircraft to villas, appliances, instruments, tools, props, vehicles, and arbitrary multi-component objects.",
    items: [
      {
        label: "GROUND",
        title: "Reference before form",
        body: "Known subjects such as a Boeing 787-9, F-22 Raptor, Concorde, Spitfire, or Cessna can begin from curated engineering dimensions and materials.",
      },
      {
        label: "LOFT",
        title: "Aerodynamic geometry",
        body: "Station skinning and mathematical airfoil curves create clean, dimension-aware surfaces instead of a generic approximation.",
      },
      {
        label: "SYNTHESIZE",
        title: "Any domain, many parts",
        body: "A modern villa, retro toaster, surveillance drone, electric guitar, or microscope is decomposed into a clear hierarchy of manufacturable forms.",
      },
      {
        label: "GROUNDING",
        title: "Visual research when needed",
        body: "January can inspect technical specifications and reference imagery before generating the Blender scene for a detailed request.",
      },
    ],
    flow: {
      inputs: ["Named machine", "Web references", "Custom brief"],
      core: "SPEC + BMESH KERNEL",
      outputs: ["Exact dimensions", "Multi-part form", "PBR export"],
      caption: "Research → normalize → loft → present",
    },
    Icon: Binary,
  },
  {
    id: "bim",
    number: "06",
    eyebrow: "Blueprint to Blender BIM",
    title: (
      <>
        A flat plan
        <br />
        becomes a place.
      </>
    ),
    summary:
      "January reads spatial intent from a floor plan and constructs a usable architectural scene in Blender.",
    detail:
      "A camera snapshot, CAD export, or 2D floor plan enters the multimodal plan analyzer for structural topology and room decomposition. The architectural bridge then lays foundations, PBR floor zones, three-metre walls, openings, windows, doors, furniture, and lighting into a coherent scene. This is a direct route from a visual plan to an editable 3D building rather than a decorative image-to-image conversion.",
    items: [
      {
        label: "READ",
        title: "Plan analysis",
        body: "Blueprint images are interpreted for rooms, walls, openings, orientation, and structural relationships.",
      },
      {
        label: "BUILD",
        title: "Procedural construction",
        body: "The bridge creates foundations, wall runs, floor materials, windows, doors, and furniture from the extracted spatial layout.",
      },
      {
        label: "MATERIAL",
        title: "BIM meets PBR",
        body: "Architectural elements receive physically based materials and daylight-ready scene settings for a convincing Blender presentation.",
      },
      {
        label: "HANDOFF",
        title: "Open and iterate",
        body: "The finished scene is saved and launched in Blender, so the plan can continue into a real design workflow.",
      },
    ],
    flow: {
      inputs: ["Floor plan", "Camera snapshot", "CAD image"],
      core: "PLAN ANALYZER",
      outputs: ["Room topology", "BIM construction", "Blender scene"],
      caption: "See the plan → map the structure → build the space",
    },
    Icon: Blocks,
  },
  {
    id: "vision-memory",
    number: "07",
    eyebrow: "Continuous camera eyes + adaptive learning",
    title: (
      <>
        Eyes that notice.
        <br />
        Memory that learns.
      </>
    ),
    summary:
      "January can hold a lightweight local understanding of presence, context, and the rhythms that make an interaction feel continuous.",
    detail:
      "The native Swift camera engine captures a 1080p frame in under 0.6 seconds and can maintain a 60 FPS hardware stream. Local OpenCV face detection runs in under 20 milliseconds for presence and arrival awareness, while ambient monitoring can observe posture and gestures such as a wave. Alongside this perception loop, learned_profile.json and interactions.jsonl build an adaptive local record of preferences, patterns, and successful interactions.",
    items: [
      {
        label: "CAMERA",
        title: "Native camera eyes",
        body: "AVFoundation drives a hardware stream, while a Swift snapshot engine delivers fresh frames quickly for visual reasoning.",
      },
      {
        label: "PRESENCE",
        title: "Local face detection",
        body: "A lightweight OpenCV detector can identify presence and route face-aware behavior without sending the detection step away from the machine.",
      },
      {
        label: "AMBIENT",
        title: "Activity in context",
        body: "Arrival, posture, and wave gestures can become useful context for an interaction rather than a passive video feed.",
      },
      {
        label: "LEARN",
        title: "Adaptive local profile",
        body: "January stores interaction history and learned preferences locally to improve continuity over time.",
      },
    ],
    flow: {
      inputs: ["60 FPS stream", "1080p snapshot", "Interaction history"],
      core: "VISION + LEARNING",
      outputs: ["Presence cues", "Visual reasoning", "Adaptive profile"],
      caption: "Observe carefully, retain locally, respond with context",
    },
    Icon: Eye,
  },
  {
    id: "brain",
    number: "08",
    eyebrow: "Brain database + conversation continuity",
    title: (
      <>
        A conversation
        <br />
        with a past.
      </>
    ),
    summary:
      "January’s SQLite brain gives long-running work and natural dialogue a durable local context window.",
    detail:
      "The persistent memory unit keeps identity, preferences, interaction moments, and active context in a structured SQLite database rather than a temporary chat buffer. A dedicated CLI exposes brain inspection and control commands, while REST endpoints make the stored context available to the local system. The purpose is simple: January should be able to pick up a working thread, recall a preference, or adapt its tone without making the user retell the essentials each time.",
    items: [
      {
        label: "STORE",
        title: "SQLite persistence",
        body: "Conversation continuity is anchored in a local relational memory unit with structured entries rather than only a transient model context.",
      },
      {
        label: "PROFILE",
        title: "Preference-aware context",
        body: "Interests, working patterns, recurring details, and prior outcomes can inform future responses.",
      },
      {
        label: "CLI",
        title: "Inspectable memory",
        body: "Brain-focused terminal commands make it possible to query, review, and manage stored conversational context.",
      },
      {
        label: "API",
        title: "System-visible continuity",
        body: "Local REST endpoints connect the brain database to the rest of January’s daemon and interactive surfaces.",
      },
    ],
    flow: {
      inputs: ["Conversation", "Preferences", "Interaction events"],
      core: "SQLITE BRAIN",
      outputs: ["Continuity", "Recall", "Adaptive context"],
      caption: "Remember the useful parts, locally and deliberately",
    },
    Icon: Database,
  },
  {
    id: "macos-code",
    number: "09",
    eyebrow: "macOS system control + coding engine",
    title: (
      <>
        The Mac is part
        <br />
        of the conversation.
      </>
    ),
    summary:
      "January can find, open, create, and explain work across the native desktop and a production-minded coding surface.",
    detail:
      "The macOS system-control engine uses Spotlight search, AppleScript, and normal application launching to bring requested files, folders, apps, media, and windows into view. Its code delegation path can generate Python, C, and C++ with type-aware, modern examples and practical run instructions. Live DuckDuckGo search and wttr.in weather access round out the system with current external context when a task needs it.",
    items: [
      {
        label: "OPEN",
        title: "Apps, files, and folders",
        body: "Ask to launch VS Code or Safari, open a report, show Downloads, or play a project video; January searches and opens the appropriate macOS target.",
      },
      {
        label: "CODE",
        title: "Python, C, and C++",
        body: "The coding engine produces clean Python 3.10+, C99/C11, and modern C++20 responses, with language-appropriate structure and run commands.",
      },
      {
        label: "SEARCH",
        title: "Live context",
        body: "DuckDuckGo-powered web search and weather lookups provide a current answer when local information alone is not enough.",
      },
      {
        label: "FOCUS",
        title: "Bring the work forward",
        body: "Window management supports launching, focusing, centering, and preparing the application that the next task requires.",
      },
    ],
    flow: {
      inputs: ["Spoken request", "Terminal prompt", "Live query"],
      core: "MACOS + CODE TOOLS",
      outputs: ["Open target", "Source code", "Web + weather"],
      caption: "Ask for the thing, then keep working in the right place",
    },
    Icon: MonitorUp,
  },
  {
    id: "voice-emotion",
    number: "10",
    eyebrow: "Emotion engine + neural voice",
    title: (
      <>
        Not just speech.
        <br />A considered reply.
      </>
    ),
    summary:
      "January tunes its spoken delivery to the moment while retaining a resilient path when a preferred voice service is unavailable.",
    detail:
      "A local emotion engine classifies tone and sentiment into seven mood archetypes, then provides that context to the response and voice layers. ElevenLabs delivers an ultra-realistic neural voice that can adjust prosody with the active emotional frame. If that path is unavailable, Microsoft Edge-TTS and the native macOS speech system preserve multilingual spoken output, while echo muting helps prevent January from listening to itself.",
    items: [
      {
        label: "EMOTION",
        title: "Seven archetypes",
        body: "The local classifier tracks sentiment and emotional context so a response can sound calm, alert, encouraging, reflective, or appropriately direct.",
      },
      {
        label: "VOICE",
        title: "ElevenLabs attunement",
        body: "Neural voice delivery can be shaped in real time by the emotion engine instead of treating every answer as the same flat reading.",
      },
      {
        label: "FALLBACK",
        title: "Resilient synthesis",
        body: "Microsoft Edge-TTS and native speech provide a multi-tier fallback path when the preferred neural voice is unavailable or offline.",
      },
      {
        label: "SPEAKER",
        title: "Physical output",
        body: "Responses play through the MacBook speakers with echo-aware handling so room conversation can remain practical.",
      },
    ],
    flow: {
      inputs: ["Emotion signal", "Response text", "Language script"],
      core: "VOICE ROUTER",
      outputs: ["Neural voice", "Edge-TTS fallback", "Native speech"],
      caption: "Understand the tone → choose the voice → speak naturally",
    },
    Icon: Volume2,
  },
  {
    id: "languages",
    number: "11",
    eyebrow: "Indian language routing + session locking",
    title: (
      <>
        Speak naturally.
        <br />
        Stay understood.
      </>
    ),
    summary:
      "January recognizes language as part of an ongoing relationship, not a setting that needs to be chosen again for every message.",
    detail:
      "The language router identifies English and fifteen Indian languages from Unicode script and spoken context. A request such as “speak in Hindi” or “मराठीत बोला” can lock the session to the appropriate language, preserve the selected writing system, and choose the matching voice path. Phonetic transliteration handling helps bridge prompts that move between Latin characters and native scripts without breaking conversational intent.",
    items: [
      {
        label: "DETECT",
        title: "Script and language",
        body: "Unicode-aware classification identifies the language and script needed for a clear spoken or written reply.",
      },
      {
        label: "LOCK",
        title: "Persistent session language",
        body: "Once a language is selected, January retains the preference across the conversation until the user asks to return to English or switch again.",
      },
      {
        label: "WRITE",
        title: "Native script first",
        body: "Responses can use the appropriate Indian writing system rather than forcing a transliterated-only experience.",
      },
      {
        label: "SPEAK",
        title: "Voice matched to language",
        body: "The selected script and language inform the voice router so spoken output remains aligned with the conversation.",
      },
    ],
    flow: {
      inputs: ["Spoken language", "Unicode script", "Session preference"],
      core: "LANGUAGE ROUTER",
      outputs: ["Native script", "Voice choice", "Persistent lock"],
      caption: "Detect → retain → express in the chosen language",
    },
    Icon: Languages,
  },
  {
    id: "lifecycle",
    number: "12",
    eyebrow: "Voice lifecycle + daemon + terminal",
    title: (
      <>
        Always ready.
        <br />
        Never in the way.
      </>
    ),
    summary:
      "January’s operating modes are designed around a room, a wake phrase, and the moments when a keyboard is simply the better interface.",
    detail:
      "In daemon mode, January runs headlessly with an energy threshold and a 1.2-second reverb guard, waiting for the wake phrase “Rise” and returning to sleep on “good night.” In terminal mode, the dual-section [ME] and [JANUARY] REPL temporarily pauses the background microphone while typed work is in progress, then restores room listening when the CLI exits. The same lifecycle controls camera eyes with explicit “eyes open” and “eyes closed” phrases.",
    items: [
      {
        label: "DAEMON",
        title: "Background companion",
        body: "npm run dev starts a headless listener that can hear wake phrases and spoken requests without a visible application window.",
      },
      {
        label: "CLI",
        title: "Interactive terminal",
        body: "npm run cli opens a focused [ME] / [JANUARY] exchange and coordinates microphone ownership while the user types.",
      },
      {
        label: "GUARD",
        title: "Reverb-aware listening",
        body: "Voice activity detection and a reverb guard help distinguish a new spoken command from January’s own speech.",
      },
      {
        label: "VERIFY",
        title: "Tested subsystems",
        body: "The project includes verification suites for CUA, BIM, precision and universal 3D, speech safety, voice integration, routing, and persistent memory.",
      },
    ],
    flow: {
      inputs: ["“Rise”", "[ME] terminal", "“Good night”"],
      core: "STATE MACHINE",
      outputs: ["Listening", "Working + speaking", "Sleeping"],
      caption: "Passive ⇄ listening ⇄ working ⇄ speaking ⇄ sleeping",
    },
    Icon: TerminalSquare,
  },
  {
    id: "commands",
    number: "13",
    eyebrow: "Natural-language command reference",
    title: (
      <>
        One sentence.
        <br />
        Many directions.
      </>
    ),
    summary:
      "The command surface stays conversational while exposing the full range of January’s model, camera, desktop, 3D, language, and system capabilities.",
    detail:
      "January’s command reference is deliberately direct. Ask “what model are you using?” to inspect routing, “make a 3D model of a cyber sword in Blender” to begin a scene, “look at what I’m holding” to invoke visual reasoning, “open VS Code” to control the Mac, or “what is the weather in Hubli?” for a live lookup. Commands can be spoken in the room or typed into the terminal, then are dispatched through the same state, safety, and memory layers shown above.",
    items: [
      {
        label: "MODEL",
        title: "Choose or reset intelligence",
        body: "“Switch model to Liquid,” “switch model to Qwen Coder,” “list free models,” and “reset model” control the dynamic model-routing session.",
      },
      {
        label: "VISION",
        title: "Open the camera eyes",
        body: "“Eyes open,” “eyes closed,” “what do you see?” and “who am I?” control capture, visual query, and local face-aware behavior.",
      },
      {
        label: "CREATE",
        title: "Build in 3D",
        body: "Request a sports car, coffee mug, Boeing 787-9, modern villa, floor plan conversion, toaster, drone, guitar, or any detailed object for Blender synthesis.",
      },
      {
        label: "ACT",
        title: "Use the Mac",
        body: "Move a cursor, type a phrase, open an application, locate a document, show a folder, play media, search the web, or retrieve live weather.",
      },
      {
        label: "SPEAK",
        title: "Change language and state",
        body: "“Speak in Hindi,” “मराठीत बोला,” “switch to English,” “good night,” and “Rise” control language preference and the active listening lifecycle.",
      },
    ],
    flow: {
      inputs: ["Spoken command", "Typed command", "Visual prompt"],
      core: "INTENT DISPATCH",
      outputs: ["Reason + reply", "Tool action", "Persistent context"],
      caption: "One command language across voice, terminal, and visual work",
    },
    Icon: Globe2,
  },
  {
    id: "foundation",
    number: "14",
    eyebrow: "Tech stack + project operation",
    title: (
      <>
        Built locally.
        <br />
        Ready to run.
      </>
    ),
    summary:
      "January is a macOS-native system with an explicit operating foundation: Node, TypeScript, Python, Blender, local data stores, and tested service boundaries.",
    detail:
      "The project is organized around a root package and a server workspace with dedicated audio, camera, vision, wake, memory, model, Blender, GUI, tool, and test modules. It requires macOS, Node.js 20+, Python 3.11+, Blender 4.0 or later, cliclick for computer-use actuation, and uv for Python package management. API keys and phrases are configured in server/.env, including primary and fallback Gemini access, ElevenLabs, OpenRouter, optional Claude, and voice/camera wake and sleep phrases.",
    items: [
      {
        label: "STACK",
        title: "Native components, clear roles",
        body: "TypeScript coordinates the daemon, CLI, router, tools, and tests; Python powers audio and local emotion work; Swift provides native camera capture; Blender provides 3D synthesis.",
      },
      {
        label: "DATA",
        title: "A structured local workspace",
        body: "Captures, face profiles, learned memory, model catalogs, and generated 3D exports live in dedicated server/data folders alongside focused engines for every system layer.",
      },
      {
        label: "SETUP",
        title: "Configuration is explicit",
        body: "Install dependencies, compile with npm run build, then create server/.env from the example and configure model keys, voice settings, and wake/sleep phrases.",
      },
      {
        label: "TEST",
        title: "Subsystem verification",
        body: "Dedicated suites cover computer use and Blender, plan-to-BIM, conversational 3D routing, engineering precision, universal synthesis, voice safety, fast fallback, and SQLite memory.",
      },
      {
        label: "STOP",
        title: "A clean exit",
        body: "Use Ctrl+C, npx kill-port 3001, or the spoken and typed “good night” command to put January back into a quiet state.",
      },
    ],
    flow: {
      inputs: ["macOS + Node", "Python + Blender", "server/.env"],
      core: "JANUARY RUNTIME",
      outputs: ["Background daemon", "Terminal CLI", "Verified services"],
      caption: "Configure once, then choose room-scale or terminal-scale interaction",
    },
    Icon: Cpu,
  },
];

function FlowDiagram({ flow, Icon }: { flow: Flow; Icon: typeof Brain }) {
  return (
    <div className="system-diagram rounded-2xl border border-glass-border/75 bg-glass-soft p-4 backdrop-blur-md sm:p-6">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-5">
        <div className="space-y-2">
          {flow.inputs.map((item, index) => (
            <div
              key={item}
              className="diagram-node diagram-node--input"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="diagram-core my-2 flex aspect-square w-24 shrink-0 flex-col items-center justify-center rounded-full border border-glass-border-strong bg-glass p-3 text-center sm:my-0 sm:w-28">
          <Icon size={19} strokeWidth={1.25} className="mb-1 text-foreground/85" />
          <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.1em] text-foreground/85">
            {flow.core}
          </span>
        </div>
        <div className="space-y-2">
          {flow.outputs.map((item, index) => (
            <div
              key={item}
              className="diagram-node diagram-node--output"
              style={{ animationDelay: `${500 + index * 180}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-5 border-t border-glass-border/60 pt-3 font-mono text-[10px] uppercase tracking-[0.13em] text-foreground/60">
        {flow.caption}
      </p>
    </div>
  );
}

function ModuleSection({ module }: { module: AtlasModule }) {
  const { Icon } = module;
  return (
    <section id={module.id} className="atlas-section px-5 py-24 sm:px-8 sm:py-28 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Reveal delay={100} className="self-start">
            <span className="inline-block border-l-2 border-foreground bg-glass px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">
              {module.number} · {module.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={200} className="max-w-md sm:text-right">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">{module.summary}</p>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.8fr)] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <Reveal delay={140}>
              <h2 className="text-5xl font-normal leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                {module.title}
              </h2>
            </Reveal>
            <Reveal delay={250} className="mt-7 max-w-xl">
              <p className="text-sm leading-relaxed text-foreground/85 sm:text-base">
                {module.detail}
              </p>
            </Reveal>
            <Reveal delay={350} className="mt-9">
              <FlowDiagram flow={module.flow} Icon={Icon} />
            </Reveal>
          </div>
          <div className="relative">
            {module.art && (
              <Reveal
                delay={200}
                className="pointer-events-none absolute -right-8 -top-28 hidden w-48 sm:block"
              >
                <img
                  src={module.art.src}
                  alt={module.art.alt}
                  className={`motion-art ${module.art.className ?? ""}`}
                />
              </Reveal>
            )}
            <div className="overflow-hidden rounded-2xl border border-glass-border/75 bg-glass-soft px-5 backdrop-blur-md sm:px-6">
              {module.items.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={280 + index * 105}
                  className={
                    index < module.items.length - 1 ? "border-b border-glass-border/75" : ""
                  }
                >
                  <div className="group flex gap-5 py-5">
                    <span className="pt-1 font-mono text-[10px] tracking-[0.15em] text-foreground/55">
                      {item.label}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-medium text-foreground sm:text-lg">
                          {item.title}
                        </h3>
                        <ChevronRight
                          size={16}
                          className="shrink-0 text-foreground/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground"
                        />
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const sequenceSteps = [
  { label: "01 · WAKE", title: "Room signal", body: "Voice activity detection receives a wake phrase or typed CLI input and moves January out of passive standby." },
  { label: "02 · PERCEIVE", title: "Understand input", body: "Faster-Whisper transcribes speech; camera or plan imagery enters the visual path when the request needs sight." },
  { label: "03 · ROUTE", title: "Choose capability", body: "The state machine adds local memory and emotion context, then the router selects the model, tool, or actuation path." },
  { label: "04 · ACT", title: "Perform safely", body: "January can answer, search, code, move the desktop, synthesize a Blender scene, or inspect the physical camera context." },
  { label: "05 · RESPOND", title: "Speak and retain", body: "The voice router produces the reply, while memory and interaction records retain the useful outcome for future continuity." },
];

function ReferenceAtlas() {
  const sourceGroups = [
    { label: "ROOT", entries: ["package.json · run scripts", "README.md · system reference", "openrouter_models.csv · model catalog"] },
    { label: "SERVER / DATA", entries: ["captures · latest camera frame", "faces · enrolled profiles", "memory · learned profile + interactions", "models · catalog cache", "exports/3d · Blender output"] },
    { label: "ENGINES", entries: ["camera_engine · Swift + OpenCV", "audio_engine · Whisper + TTS + emotion", "src/models · dynamic router", "src/cua + gui · desktop actions", "src/blender + vision · 3D and perception"] },
    { label: "RUNTIME", entries: ["src/memory + emotions · continuity", "src/audio + wake · listening lifecycle", "src/gemini + tools · intelligence surface", "src/tests · subsystem verification"] },
  ];

  return (
    <section id="reference" className="atlas-section px-5 pb-28 pt-12 sm:px-8 md:px-12 md:pb-32">
      <div className="mx-auto max-w-7xl border-t border-glass-border/75 pt-20">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Reveal delay={80} className="self-start"><span className="inline-block border-l-2 border-foreground bg-glass px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">System reference · no empty states</span></Reveal>
          <Reveal delay={160} className="max-w-md sm:text-right">
            <p className="text-lg leading-relaxed text-foreground sm:text-xl">
              The complete January map: how the system is arranged, how a request travels, and where
              each part lives.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 xl:grid-cols-2">
          <Reveal delay={140}>
            <article className="reference-card rounded-2xl border border-glass-border/75 bg-glass-soft p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/65">Master system architecture</p><h2 className="mt-2 text-2xl font-medium text-foreground sm:text-3xl">One operating system, four layers.</h2></div><Network size={24} strokeWidth={1.25} className="shrink-0 text-foreground/80" /></div>
              <div className="master-map mt-8 grid gap-3 sm:grid-cols-4">
                <div className="master-column"><span>INPUTS</span><p>Microphone</p><p>Camera eyes</p><p>CLI + plans</p></div>
                <div className="master-column"><span>COORDINATE</span><p>VAD + Whisper</p><p>State machine</p><p>Local memory</p></div>
                <div className="master-column"><span>REASON</span><p>Emotion engine</p><p>Model router</p><p>Web + code</p></div>
                <div className="master-column"><span>ACT + SPEAK</span><p>CUA safety</p><p>Blender + BIM</p><p>Neural voice</p></div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-foreground/80">Physical input and stored context converge in the daemon; January then routes the task to intelligence, tools, or synthesis before returning a spoken, on-screen, or generated result.</p>
            </article>
          </Reveal>

          <Reveal delay={240}>
            <article className="reference-card rounded-2xl border border-glass-border/75 bg-glass-soft p-5 backdrop-blur-md sm:p-6">
              <div className="flex items-center justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/65">End-to-end sequence diagram</p><h2 className="mt-2 text-2xl font-medium text-foreground sm:text-3xl">From “Rise” to response.</h2></div><CircleDot size={24} strokeWidth={1.25} className="shrink-0 text-foreground/80" /></div>
              <ol className="sequence-map mt-8">
                {sequenceSteps.map((step, index) => <li key={step.label} className="sequence-step"><span className="sequence-index">{step.label}</span><div><h3>{step.title}</h3><p>{step.body}</p></div>{index < sequenceSteps.length - 1 && <i aria-hidden="true" />}</li>)}
              </ol>
            </article>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-5">
          <article className="reference-card rounded-2xl border border-glass-border/75 bg-glass-soft p-5 backdrop-blur-md sm:p-6">
            <div className="flex items-center justify-between gap-4"><div><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/65">Project file stack</p><h2 className="mt-2 text-2xl font-medium text-foreground sm:text-3xl">A dedicated home for every capability.</h2></div><Database size={24} strokeWidth={1.25} className="shrink-0 text-foreground/80" /></div>
            <div className="file-stack mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {sourceGroups.map((group, index) => <div key={group.label} className="file-group" style={{ animationDelay: `${index * 120}ms` }}><span>january-ai / {group.label.toLowerCase()}</span>{group.entries.map((entry) => <p key={entry}>{entry}</p>)}</div>)}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-foreground/80">The file stack follows the same boundaries as the architecture: data stays local, native engines are separated by modality, and the TypeScript source is divided into focused orchestration, intelligence, actuation, synthesis, and test layers.</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <ScrollVideo />
      <div className="relative z-10">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-glass-border/75 bg-glass-soft backdrop-blur-md">
          <nav
            className="flex h-18 items-center justify-between px-5 sm:px-8 md:px-12"
            aria-label="January navigation"
          >
            <Reveal>
              <a href="#top" className="flex items-center gap-2 text-lg font-medium sm:text-xl">
                <Hexagon size={24} strokeWidth={1.5} />
                JANUARY
              </a>
            </Reveal>
            <div className="hidden items-center gap-7 md:flex lg:gap-9">
              {["Architecture", "Intelligence", "Action", "Creation"].map((label, index) => (
                <Reveal key={label} delay={100 + index * 80}>
                  <a
                    href={
                      label === "Architecture"
                        ? "#architecture"
                        : label === "Intelligence"
                          ? "#routing"
                          : label === "Action"
                            ? "#computer-use"
                            : "#blender"
                    }
                    className="text-sm text-foreground/85 transition-colors duration-300 hover:text-foreground"
                  >
                    {label}
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={440}>
              <Button asChild variant="januaryNav">
                <a href="https://github.com/ashwintelangstark/january.systems/archive/refs/heads/main.zip">
                  Download January <ChevronRight size={14} />
                </a>
              </Button>
            </Reveal>
          </nav>
        </header>

        <main>
          <section
            id="top"
            className="flex min-h-screen flex-col justify-between px-5 pb-12 pt-24 supports-[height:100svh]:min-h-[100svh] sm:px-8 sm:pt-28 md:px-12 md:pb-16"
          >
            <div className="flex flex-col justify-between gap-8 sm:flex-row">
              <div className="flex flex-col gap-2">
                {["/ LOCAL AUTONOMOUS AI", "/ MACOS COMPUTER USE", "/ NATIVE 3D SYNTHESIS"].map(
                  (service, index) => (
                    <Reveal key={service} delay={150 + index * 120}>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/90">
                        {service}
                      </p>
                    </Reveal>
                  ),
                )}
              </div>
              <Reveal delay={300} className="max-w-xs sm:text-right">
                <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                  An emotionally expressive companion built to see, listen, reason, act, remember,
                  and create beside you.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <Reveal delay={150} className="mb-5">
                  <span className="inline-block border-l-2 border-foreground bg-glass px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">
                    Made for macOS · say “Rise”
                  </span>
                </Reveal>
                <Reveal delay={280}>
                  <h1 className="text-5xl font-normal leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
                    Present. Precise.
                    <br />
                    January.
                  </h1>
                </Reveal>
              </div>
              <Reveal delay={420} className="w-full max-w-xs">
                <a
                  href="#architecture"
                  className="group flex items-center justify-between gap-5 rounded-xl border border-glass-border/75 bg-glass p-4 backdrop-blur-md transition-colors duration-300 hover:bg-glass-hover"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">Navigate to About</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/60">
                      Enter the systems atlas
                    </p>
                  </div>
                  <ArrowDownRight
                    size={22}
                    className="shrink-0 text-foreground/70 transition-transform duration-300 group-hover:translate-y-1"
                  />
                </a>
              </Reveal>
            </div>
          </section>
          <div className="h-[72vh]" aria-hidden="true" />
          {modules.map((module) => (
            <ModuleSection key={module.id} module={module} />
          ))}
          <ReferenceAtlas />
          <section className="px-5 pb-16 pt-8 sm:px-8 md:px-12">
            <Reveal>
              <div className="mx-auto max-w-7xl border-t border-glass-border/75 pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/65">
                  JANUARY · local autonomous intelligence for macOS · Rise when you are ready
                </p>
              </div>
            </Reveal>
          </section>
        </main>
      </div>
    </div>
  );
}
