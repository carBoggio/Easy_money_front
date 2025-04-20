import { IconSvgProps } from "@/types";

export const FuturisticLogo = ({ size = 36, ...props }: IconSvgProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Outer hexagon with gradient */}
    <path
      d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
      fill="url(#hexGradient)"
      stroke="url(#hexStrokeGradient)"
      strokeWidth="1.5"
    />

    {/* Inner hexagon */}
    <path
      d="M24 12L33 17V27L24 32L15 27V17L24 12Z"
      fill="url(#innerHexGradient)"
      fillOpacity="0.6"
    />

    {/* Circuit lines */}
    <path
      d="M14 18L6 14M34 18L42 14M24 32V44M15 27L6 34M33 27L42 34"
      stroke="url(#circuitGradient)"
      strokeWidth="1"
      strokeLinecap="round"
      strokeDasharray="1 2"
    />

    {/* Central node with glow */}
    <circle cx="24" cy="24" r="3" fill="url(#nodeGradient)">
      <animate
        attributeName="opacity"
        values="0.6;1;0.6"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Pulse effect */}
    <circle
      cx="24"
      cy="24"
      r="5"
      stroke="#50E6FF"
      strokeWidth="0.5"
      fill="none"
    >
      <animate
        attributeName="r"
        values="3;8;3"
        dur="3s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        values="0.8;0;0.8"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Gradients definitions */}
    <defs>
      <linearGradient
        id="hexGradient"
        x1="6"
        y1="4"
        x2="42"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4F46E5" />
        <stop offset="1" stopColor="#0EA5E9" />
      </linearGradient>

      <linearGradient
        id="hexStrokeGradient"
        x1="6"
        y1="4"
        x2="42"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#818CF8" />
        <stop offset="1" stopColor="#38BDF8" />
      </linearGradient>

      <linearGradient
        id="innerHexGradient"
        x1="15"
        y1="12"
        x2="33"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#50E6FF" />
        <stop offset="1" stopColor="#0085FF" />
      </linearGradient>

      <linearGradient
        id="circuitGradient"
        x1="6"
        y1="14"
        x2="42"
        y2="44"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#818CF8" />
      </linearGradient>

      <radialGradient
        id="nodeGradient"
        cx="24"
        cy="24"
        r="3"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#50E6FF" />
      </radialGradient>
    </defs>
  </svg>
);
