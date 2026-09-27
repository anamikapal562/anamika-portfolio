export const profile = {
  name: "Anamika Pal",
  givenName: "Anamika",
  role: "User Experience Designer II",
  roleLine: "User Experience Designer II / Product Designer",
  location: "Bangalore, India",
  company: "Zeta",
  experienceLabel: "5+ years experience",
  years: "5+ Years",
  tagline:
    "Designing thoughtful experiences for complex products, people and workflows.",
  email: "hello@anamikapal.com",
  portrait: {
    src: "/images/profile/anamika.svg",
    alt: "Illustrated placeholder for a portrait of Anamika Pal",
  },
  resumePdf: "/images/resume/anamika-pal-resume.pdf",
} as const;

export const focusItems = [
  "AI-powered experiences",
  "Simplifying complex workflows",
  "Designing enterprise products",
  "Building scalable design systems",
  "Prototyping & experimentation",
] as const;

export const practiceAreas = [
  { label: "Enterprise UX", slug: "complex-workflows", tone: "clay" },
  { label: "Fintech & Banking", slug: "complex-workflows", tone: "brown" },
  { label: "AI Products", slug: "ai-experiences", tone: "sage" },
  { label: "Design Systems", slug: "design-systems", tone: "peach" },
  { label: "Complex Workflows", slug: "complex-workflows", tone: "orange" },
  { label: "0 → 1 Products", slug: "design-systems", tone: "sand" },
] as const;

export const experiencePoints = [
  "Product Design",
  "Enterprise UX",
  "Fintech",
  "Banking",
  "AI Experiences",
] as const;

export const creativeRoots = [
  "Graphic Design",
  "Illustration",
  "Branding",
  "Visual storytelling",
] as const;

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

export type Project = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  tags: string[];
  role: string;
  context: string;
  focus: string;
  tone: "peach" | "sage" | "sand";
  cover: ProjectVisual;
  visuals: ProjectVisual[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "complex-workflows",
    index: "01",
    title: "Making dense workflows feel obvious",
    summary:
      "Enterprise banking tools often show everything at once. The design work is deciding what a person needs in the moment — and what can wait a step away.",
    tags: ["Enterprise UX", "Fintech", "Workflows"],
    role: "Product design & UX",
    context: "B2B fintech and banking platforms at Zeta",
    focus: "Complex operational workflows",
    tone: "peach",
    cover: {
      src: "/images/projects/complex-workflows-cover.svg",
      alt: "Placeholder frame for a workflow study cover",
      label: "Workflow cover",
    },
    visuals: [
      {
        src: "/images/projects/complex-workflows-map.svg",
        alt: "Placeholder frame for a workflow map",
        label: "Journey & exceptions",
      },
      {
        src: "/images/projects/complex-workflows-screen.svg",
        alt: "Placeholder frame for a key screen",
        label: "The decision screen",
      },
    ],
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "People using enterprise banking products are expert, busy, and often interrupted. A single task can still cross approvals, exceptions, permissions, and data that was written for the system rather than the person.",
          "The interface then asks them to reconstruct the story of the work from scattered statuses and tables. The product feels complicated even when the underlying task is knowable.",
        ],
      },
      {
        title: "How I approach it",
        paragraphs: [
          "I start with the sequence, not the screen. Who touches the work, what decision they are actually making, and where they stop and ask someone else. Once that is clear, the design problem gets smaller and more honest — not “redesign the module,” but “make this decision possible without a walkthrough.”",
        ],
        bullets: [
          "Map the real path, including the exceptions people actually hit",
          "Name the decision each step is asking for",
          "Keep density, and fix hierarchy, language, and state",
          "Leave a pattern the next workflow can reuse",
        ],
      },
      {
        title: "What I pay attention to",
        paragraphs: [
          "Language that matches the job, not the database. Empty, loading, and error moments — where enterprise UX usually frays. And the quiet confidence of a screen that can stay information-rich without shouting.",
          "Most of this work lives inside products I can’t publish in full. The frames on this page are ready for the visuals; the structure is how I want the study to be read.",
        ],
      },
    ],
  },
  {
    slug: "design-systems",
    index: "02",
    title: "A system that keeps the product coherent",
    summary:
      "A design system is not a sticker sheet. It is how a large product stays recognizable when many people are designing it at once.",
    tags: ["Design Systems", "Visual Design", "Enterprise"],
    role: "Design systems & visual design",
    context: "Enterprise product design at Zeta",
    focus: "Shared patterns for complex products",
    tone: "sand",
    cover: {
      src: "/images/projects/design-systems-cover.svg",
      alt: "Placeholder frame for a design system study cover",
      label: "System cover",
    },
    visuals: [
      {
        src: "/images/projects/design-systems-tokens.svg",
        alt: "Placeholder frame for foundations and tokens",
        label: "Foundations",
      },
      {
        src: "/images/projects/design-systems-patterns.svg",
        alt: "Placeholder frame for interface patterns",
        label: "Patterns in use",
      },
    ],
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "Enterprise products grow by accumulation. New workflows arrive with new one-off components, slightly different spacing, and words for the same idea. The product still functions. It just stops feeling like one product.",
          "A system has to earn its place. If it only documents what already shipped, teams route around it the next time a workflow gets strange.",
        ],
      },
      {
        title: "How I approach it",
        paragraphs: [
          "I treat the system as a product with users: the designers and engineers shipping the next workflow. Foundations — type, color, elevation, language — come first, then the patterns that show up every time a task is dense: filters, status, review, empty states, decision panels.",
          "Graphic design is where I started, so visual craft is not a coat of paint at the end. It is how hierarchy and trust show up in a tool someone uses all day.",
        ],
        bullets: [
          "Decide what must be consistent, and what a team can flex",
          "Design the awkward states, not only the happy components",
          "Write guidelines in the language of the job to be done",
          "Pair the kit with a real workflow so it gets proven, not just published",
        ],
      },
      {
        title: "What the study will show",
        paragraphs: [
          "Foundations, a handful of patterns under pressure, and the before/after of a workflow that got clearer because the system existed. Those visuals are placeholders for now.",
        ],
      },
    ],
  },
  {
    slug: "ai-experiences",
    index: "03",
    title: "AI that explains itself",
    summary:
      "An AI feature in an operational product fails when it hands someone an answer and leaves them alone with the decision to trust it.",
    tags: ["AI Products", "Prototyping", "Enterprise UX"],
    role: "Product design & prototyping",
    context: "AI-powered experiences within enterprise products",
    focus: "Legible, editable assistance",
    tone: "sage",
    cover: {
      src: "/images/projects/ai-experiences-cover.svg",
      alt: "Placeholder frame for an AI experience study cover",
      label: "AI study cover",
    },
    visuals: [
      {
        src: "/images/projects/ai-experiences-flow.svg",
        alt: "Placeholder frame for an assistance flow",
        label: "Suggest, edit, confirm",
      },
      {
        src: "/images/projects/ai-experiences-states.svg",
        alt: "Placeholder frame for trust and error states",
        label: "When it is unsure",
      },
    ],
    sections: [
      {
        title: "The problem",
        paragraphs: [
          "In fintech and banking tools, a suggestion is never just a suggestion. Someone has to stand behind the outcome. If the interface hides the source, the edit, or the uncertainty, the model has made the product harder to trust, not easier to use.",
        ],
      },
      {
        title: "How I approach it",
        paragraphs: [
          "I design the experience around the model: what is proposed, what remains editable, what evidence is visible, and how a person stays responsible for the decision. Prototypes are how I find out whether that contract is understandable before anyone debates the polish.",
        ],
        bullets: [
          "Show the suggestion and the reason in the same glance",
          "Make the edit path shorter than the accept path when stakes are high",
          "Design the unsure, wrong, and empty states with the same care as the success state",
          "Prototype the conversation between person and system, not only the final UI",
        ],
      },
      {
        title: "What the study will show",
        paragraphs: [
          "A flow from suggestion to committed decision, and the states that keep a person in charge. The frames are marked as placeholders so they are never mistaken for shipped product UI.",
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
        "Selected product design work by Anamika Pal: complex enterprise workflows, design systems, and AI experiences in fintech and banking.",
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
        "Anamika Pal is a User Experience Designer II at Zeta in Bangalore, designing user-centric experiences for complex B2B fintech and banking products.",
    };
  }

  if (path === "/resume") {
    return {
      title: "Résumé — Anamika Pal",
      description:
        "Résumé of Anamika Pal, User Experience Designer II / Product Designer at Zeta, Bangalore. Five years across graphic design, enterprise UX, fintech, and design systems.",
    };
  }

  if (path === "/contact") {
    return {
      title: "Contact — Anamika Pal",
      description:
        "Get in touch with Anamika Pal, a UX and product designer in Bangalore, about enterprise, fintech, and AI product work.",
    };
  }

  return {
    title: "Page not found — Anamika Pal",
    description: home.description,
  };
}
