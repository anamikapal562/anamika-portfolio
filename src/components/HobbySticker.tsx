import { hobbies } from "../data/content";
import { HobbyIllustration } from "./HobbyIllustration";

export function HobbySticker({ hobby, className }: { hobby: string; className: string }) {
  const item = hobbies.find((entry) => entry.hobby === hobby);
  if (!item) return null;
  return (
    <HobbyIllustration
      className={className}
      hobby={item.hobby}
      label={item.label}
      illustration={item.illustration}
      rotation={item.rotation}
    />
  );
}
