export function Pin() {
  return (
    <svg className="pin" viewBox="0 0 44 64" width="36" height="52" aria-hidden="true">
      <path d="M22 28v30" stroke="#5c5148" strokeWidth="2" fill="none" />
      <circle cx="22" cy="18" r="12" fill="#e36a24" />
      <circle cx="22" cy="18" r="12" fill="none" stroke="#9a3412" strokeWidth="1.2" />
      <circle cx="18" cy="14" r="3.2" fill="#fff" opacity="0.55" />
    </svg>
  );
}

export function Paperclip() {
  return (
    <svg className="paperclip" viewBox="0 0 32 60" aria-hidden="true">
      <path
        d="M12 18v28a8 8 0 0 0 16 0V14a5 5 0 0 0-10 0v26"
        fill="none"
        stroke="#8d8f93"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FolderGlyph({ tone }: { tone: string }) {
  const fills: Record<string, string> = {
    clay: "#e07a45",
    brown: "#8a6249",
    sage: "#6e9a7d",
    peach: "#f0b48a",
    orange: "#e36a24",
    sand: "#e6d3b4",
  };
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true">
      <path
        fill={fills[tone] ?? "#e07a45"}
        d="M6 14.5c0-2 1.6-3.5 3.6-3.5h14.2c.9 0 1.8.4 2.4 1.1l2.2 2.6c.6.7 1.5 1.1 2.4 1.1H54c2 0 3.6 1.6 3.6 3.6v22.2c0 2-1.6 3.6-3.6 3.6H9.6C7.6 45.2 6 43.6 6 41.6V14.5z"
      />
      <path d="M8 24h48" stroke="#fff" strokeOpacity="0.35" />
    </svg>
  );
}

export function BangaloreMark() {
  return (
    <svg className="stamp-art" viewBox="0 0 140 90" aria-hidden="true">
      <path
        d="M34 70c8-18 10-28 8-40"
        fill="none"
        stroke="#2f5d45"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="40" cy="28" r="12" fill="none" stroke="#2f5d45" strokeWidth="1.6" />
      <circle cx="28" cy="36" r="8" fill="none" stroke="#2f5d45" strokeWidth="1.4" />
      <path d="M22 70h36" stroke="#2f5d45" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M78 30h22l-2 28c0 4-4 8-9 8s-9-4-9-8l-2-28z"
        fill="none"
        stroke="#2f5d45"
        strokeWidth="1.6"
      />
      <path d="M76 30h26" stroke="#2f5d45" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="89" cy="72" rx="16" ry="5" fill="none" stroke="#2f5d45" strokeWidth="1.4" />
      <path d="M96 38c6 2 8 6 8 6" fill="none" stroke="#2f5d45" strokeWidth="1.2" />
    </svg>
  );
}
