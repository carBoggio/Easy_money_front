import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// src/types/index.ts
export * from "./raffle";
export * from "./user";
export * from "./prize";
export * from "./payment";
export * from "./notification";
export * from "./countdown";
