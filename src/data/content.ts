export const profile = {
  name: "Anamika Pal",
  givenName: "Anamika",
  role: "User Experience Designer II at Zeta",
  roleLine: "User Experience Designer II / Product Designer",
  location: "Bangalore, India",
  company: "Zeta",
  experienceLabel: "5+ years experience",
  years: "5+ Years",
  tagline: "5+ years designing products that make complex systems easier to navigate.",
  domains: "Enterprise SaaS · Fintech · Data Products · AI",
  email: "hello@anamikapal.com",
  /** Replace with a real profile URL. Do not invent one. */
  linkedin: null as string | null,
  portrait: {
    src: "/images/profile/anamika.svg",
    alt: "Illustrated placeholder for a portrait of Anamika Pal",
  },
  resumePdf: "/images/resume/anamika-pal-resume.pdf",
} as const;

export const hobbies = [
  {
    hobby: "basketball",
    label: "Basketball",
    illustration: "/images/hobbies/basketball.svg",
    rotation: "-8deg",
  },
  {
    hobby: "swimming",
    label: "Swimming",
    illustration: "/images/hobbies/swimming.svg",
    rotation: "4deg",
  },
  {
    hobby: "painting",
    label: "Painting",
    illustration: "/images/hobbies/painting.svg",
    rotation: "-3deg",
  },
  {
    hobby: "doodling",
    label: "Doodling",
    illustration: "/images/hobbies/doodling.svg",
    rotation: "7deg",
  },
  {
    hobby: "travel",
    label: "Always planning the next trip",
    illustration: "/images/hobbies/travel.svg",
    rotation: "-5deg",
  },
  {
    hobby: "cricket",
    label: "Cricket",
    illustration: "/images/hobbies/cricket.svg",
    rotation: "6deg",
  },
] as const;

export const focusItems = [
  "AI-powered experiences",
  "Complex workflows",
  "Enterprise products",
  "Better ways to work",
] as const;

export const practiceAreas = [
  { label: "Enterprise SaaS", slug: "quark-data-studio", tone: "clay" },
  { label: "Fintech & Banking", slug: "unnati-credit-upi", tone: "brown" },
  { label: "AI Products", slug: "ai-ux-audits", tone: "sage" },
  { label: "Illustrations", slug: null, tone: "peach" },
  { label: "Complex Workflows", slug: "operation-center-delegation", tone: "orange" },
  { label: "Animations", slug: null, tone: "sand" },
] as const;

export const experiencePoints = [
  "Enterprise SaaS",
  "AI experimentation",
  "Graphic design",
  "Illustration",
  "Visual storytelling",
] as const;

export const creativeRoots = [
  "Graphic Design",
  "Illustration",
  "Branding",
  "Visual storytelling",
] as const;

/** Years after 2021 are intentionally unset until confirmed. */
export const careerPath = [
  {
    year: "2021",
    title: "Graphic Design",
    detail: "Visual storytelling · Branding · Explainers",
  },
  {
    year: "",
    title: "UX Design",
    detail: "Enterprise products · Workflows · Research",
  },
  {
    year: "",
    title: "UX Designer II",
    detail: "Product thinking · Complex systems · AI experimentation",
  },
] as const;

export const careerSpan = "5+ years at Zeta";

export const strengths = [
  {
    title: "Complex Systems",
    body: "I enjoy turning complicated enterprise workflows into experiences people can understand and navigate.",
  },
  {
    title: "Product Thinking",
    body: "I like understanding the problem, constraints and user needs before jumping into the interface.",
  },
  {
    title: "Visual Craft",
    body: "My foundation in graphic design continues to influence how I approach hierarchy, interaction and visual storytelling.",
  },
  {
    title: "AI + Experimentation",
    body: "I actively explore AI tools and new workflows to make design exploration and delivery faster and more scalable.",
  },
] as const;

export type CollaboratorNote = {
  name: string;
  role: string;
  /** null until a real URL is added in this file. */
  linkedin: string | null;
  emphasis: string;
  paragraphs: string[];
  tilt: string;
  paper: "butter" | "slate" | "blush";
};

export const collaboratorNotes: CollaboratorNote[] = [
  {
    name: "Uditshankar Dixit",
    role: "Director of Design, Zuora",
    linkedin: null,
    emphasis: "Quark · Design patterns · Experimentation",
    tilt: "-1deg",
    paper: "butter",
    paragraphs: [
      "It was great to see you shape Quark to where it is. Across all highs and lows you were able to create domain and persona optimised designs.",
      "Your gift and willingness to experiment while not breaking rules gave us many design patterns and helped GDS. Keep up the fantastic design work.",
    ],
  },
  {
    name: "Siddhartha Sengupta",
    role: "Sr. UX Designer, Zeta Suite",
    linkedin: null,
    emphasis: "Quark · Research · Collaboration · Growth",
    tilt: "1deg",
    paper: "slate",
    paragraphs: [
      "I would like to thank Anamika for being a constant support on Quark Data Studio and Analytics Center. It was heartening to see her excel not just in her craft but also various initiatives which enriches the culture of the design team.",
      "On Quark, she demonstrated her zeal to achieve excellence. She accepted and adapted to the vision I had for QDS and contributed towards it. She proactively did primary and secondary research and documented them well so they can be shared with other product designers for reference. All evidences of her growth in #KnowledgeAndDeliverables.",
    ],
  },
  {
    name: "Sanjivani Iyer",
    role: "Manager, InfoDev Team",
    linkedin: null,
    emphasis: "Credit · Visual storytelling · Prototyping",
    tilt: "-1.5deg",
    paper: "blush",
    paragraphs: [
      "Anamika's work with Tachyon Credit videos has been excellent. She has created conceptual videos that clearly explain a lifecycle stage of credit cards.",
      "She has also done commendable job on creation of the prototypes for the Info architecture proposal.",
    ],
  },
];

export type ProjectSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ProjectVisual = {
  src: string;
  alt: string;
  label: string;
};

export type ProjectMeta = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  kicker: string;
  eyebrow: string;
  productName: string;
  summary: string;
  tags: string[];
  meta: ProjectMeta[];
  layout: "feature" | "half" | "wide";
  tone: "sand" | "sage" | "peach" | "ink";
  /** Visual treatment only. Does not add claims. */
  motif: "unify" | "pipeline" | "handoff" | "consumer";
  outcome?: string;
  cover: ProjectVisual;
  visuals: ProjectVisual[];
  sections: ProjectSection[];
};

const placeholderNote =
  "The full case study will be added here. These frames are placeholders for the project visuals.";

export const projects: Project[] = [
  {
    slug: "quark-data-studio",
    index: "01",
    title: "Streamlined Data Operations",
    kicker: "Zeta SaaS Product Design",
    eyebrow: "Case Study · Private",
    productName: "Quark Data Studio",
    summary:
      "Designed a unified data platform Quark Data Studio to efficiently manage, process, explore and integrate data applications like reports, extracts, charts and dashboards.",
    tags: ["Enterprise UX", "SaaS", "Data Products", "Complex Workflows"],
    meta: [
      { label: "Role", value: "Product / UX Designer" },
      { label: "Company", value: "Zeta" },
      { label: "Domain", value: "Enterprise SaaS" },
    ],
    layout: "feature",
    tone: "sand",
    motif: "unify",
    cover: {
      src: "/images/projects/quark-data-studio.svg",
      alt: "Placeholder for the Quark Data Studio project image",
      label: "PROJECT IMAGE — QUARK DATA STUDIO",
    },
    visuals: [
      {
        src: "/images/projects/quark-data-studio-02.svg",
        alt: "Placeholder for a second Quark Data Studio visual",
        label: "PROJECT IMAGE — QUARK DATA STUDIO",
      },
    ],
    sections: [
      {
        title: "The work",
        paragraphs: [
          "Designed a unified data platform Quark Data Studio to efficiently manage, process, explore and integrate data applications like reports, extracts, charts and dashboards.",
          "This case study is private. The page is structured so the narrative and images can be added without redesigning the site.",
        ],
      },
      {
        title: "Visuals",
        paragraphs: [placeholderNote],
      },
    ],
  },
  {
    slug: "ai-ux-audits",
    index: "02",
    title: "Scaling UX Audits with AI Agents",
    kicker: "AI-Augmented Design Operations",
    eyebrow: "Initiative · AI workflow",
    productName: "Agentic UX audit system",
    summary:
      "Built an agentic UX audit system using Claude, Figma MCP, Chrome MCP and Playwright that reduced audit effort from a full day to approximately 1–1.5 hours, while automatically generating developer-ready audit reports.",
    tags: ["AI", "Design Operations", "UX Audits", "Automation"],
    meta: [
      { label: "Role", value: "Designer · AI Workflow Builder" },
      { label: "Focus", value: "AI + UX Operations" },
    ],
    layout: "half",
    tone: "sage",
    motif: "pipeline",
    outcome: "A full day → about 1–1.5 hours",
    cover: {
      src: "/images/projects/ai-ux-audit.svg",
      alt: "Placeholder for the AI UX audit system project image",
      label: "PROJECT IMAGE — AI UX AUDIT SYSTEM",
    },
    visuals: [
      {
        src: "/images/projects/ai-ux-audit-02.svg",
        alt: "Placeholder for a second AI UX audit visual",
        label: "PROJECT IMAGE — AI UX AUDIT SYSTEM",
      },
    ],
    sections: [
      {
        title: "The initiative",
        paragraphs: [
          "Built an agentic UX audit system using Claude, Figma MCP, Chrome MCP and Playwright that reduced audit effort from a full day to approximately 1–1.5 hours, while automatically generating developer-ready audit reports.",
        ],
        bullets: [
          "Claude",
          "Figma MCP",
          "Chrome MCP",
          "Playwright",
        ],
      },
      {
        title: "Outcome",
        paragraphs: [
          "Audit effort moved from a full day to approximately 1–1.5 hours, with developer-ready audit reports generated automatically.",
          placeholderNote,
        ],
      },
    ],
  },
  {
    slug: "operation-center-delegation",
    index: "03",
    title: "Designing Delegation for Smarter Task Management",
    kicker: "Zeta SaaS Feature Design",
    eyebrow: "Feature · Workflow",
    productName: "Operation Center",
    summary:
      "Designed a delegation feature for Zeta's SaaS platform Operation Center, enabling seamless task handoffs and improving efficiency in multi-assessor workflows.",
    tags: ["Enterprise UX", "Workflow Design", "SaaS", "Task Management"],
    meta: [
      { label: "Role", value: "UX Designer" },
      { label: "Product", value: "Operation Center" },
      { label: "Focus", value: "Complex Workflow Design" },
    ],
    layout: "half",
    tone: "ink",
    motif: "handoff",
    cover: {
      src: "/images/projects/operation-center-delegation.svg",
      alt: "Placeholder for the Operation Center delegation project image",
      label: "PROJECT IMAGE — OPERATION CENTER DELEGATION",
    },
    visuals: [
      {
        src: "/images/projects/operation-center-delegation-02.svg",
        alt: "Placeholder for a second Operation Center visual",
        label: "PROJECT IMAGE — OPERATION CENTER DELEGATION",
      },
    ],
    sections: [
      {
        title: "The work",
        paragraphs: [
          "Designed a delegation feature for Zeta's SaaS platform Operation Center, enabling seamless task handoffs and improving efficiency in multi-assessor workflows.",
          placeholderNote,
        ],
      },
    ],
  },
  {
    slug: "unnati-credit-upi",
    index: "04",
    title: "Credit Enablement in UPI Apps",
    kicker: "Zeta Web App Design",
    eyebrow: "Fintech · Consumer",
    productName: "Unnati",
    summary:
      "Co-designed the Unnati app, enabling credit functionality within UPI apps. The work was showcased at Zeta's Democratizing Banking 2023 event.",
    tags: ["Fintech", "UPI", "Credit", "Mobile Experience"],
    meta: [
      { label: "Role", value: "Product / UX Designer" },
      { label: "Domain", value: "Fintech" },
      { label: "Focus", value: "Credit + UPI" },
    ],
    layout: "wide",
    tone: "peach",
    motif: "consumer",
    cover: {
      src: "/images/projects/unnati.svg",
      alt: "Placeholder for the Unnati project image",
      label: "PROJECT IMAGE — UNNATI",
    },
    visuals: [
      {
        src: "/images/projects/unnati-02.svg",
        alt: "Placeholder for a second Unnati visual",
        label: "PROJECT IMAGE — UNNATI",
      },
    ],
    sections: [
      {
        title: "The work",
        paragraphs: [
          "Co-designed the Unnati app, enabling credit functionality within UPI apps. The work was showcased at Zeta's Democratizing Banking 2023 event.",
          placeholderNote,
        ],
      },
    ],
  },
];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function metaFor(path: string) {
  const home = {
    title: "Anamika Pal — UX Designer & Product Designer",
    description:
      "Anamika Pal is a UX/Product Designer based in Bangalore, designing thoughtful experiences for complex enterprise, fintech and AI products.",
  };

  if (path === "/" || path === "") return home;

  if (path === "/work") {
    return {
      title: "Work — Anamika Pal",
      description:
        "Selected work by Anamika Pal: Quark Data Studio, AI-assisted UX audits, Operation Center delegation, and the Unnati credit experience.",
    };
  }

  if (path.startsWith("/work/")) {
    const project = projectBySlug(path.slice("/work/".length));
    if (project) {
      return {
        title: `${project.title} — Anamika Pal`,
        description: project.summary,
      };
    }
  }

  if (path === "/about") {
    return {
      title: "About — Anamika Pal",
      description:
        "Anamika Pal is a User Experience Designer II at Zeta in Bangalore, designing for complex enterprise and fintech products.",
    };
  }

  if (path === "/resume") {
    return {
      title: "Résumé — Anamika Pal",
      description:
        "Résumé of Anamika Pal, User Experience Designer II / Product Designer at Zeta, Bangalore.",
    };
  }

  if (path === "/contact") {
    return {
      title: "Contact — Anamika Pal",
      description:
        "Get in touch with Anamika Pal, a UX and product designer in Bangalore, about enterprise, fintech, and complex product work.",
    };
  }

  return {
    title: "Page not found — Anamika Pal",
    description: home.description,
  };
}
