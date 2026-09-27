import { createContext, useContext } from "react";

export type RouterValue = {
  path: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterValue | null>(null);

export function normalize(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname || "/";
}

export function useRouter() {
  const value = useContext(RouterContext);
  if (!value) {
    throw new Error("useRouter must be used within Router");
  }
  return value;
}
