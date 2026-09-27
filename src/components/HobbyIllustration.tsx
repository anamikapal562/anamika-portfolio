type HobbyIllustrationProps = {
  hobby: string;
  label: string;
  illustration: string;
  rotation: string;
};

export function HobbyIllustration({
  hobby,
  label,
  illustration,
  rotation,
}: HobbyIllustrationProps) {
  return (
    <li className="hobby" data-hobby={hobby} style={{ rotate: rotation }}>
      <button type="button" aria-label={label}>
        <img src={illustration} alt="" width="48" height="48" />
        <span className="hobby-label" aria-hidden="true">
          {label}
        </span>
      </button>
    </li>
  );
}
