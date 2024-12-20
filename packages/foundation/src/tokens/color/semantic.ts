import {
  Black,
  Blue,
  BlueGray,
  Green,
  Red,
  Teal,
  White,
  Yellow,
} from "@/tokens/color/palletes";

type CoreColor = "Teal" | "Blue" | "BlueGray" | "White";
export const CoreColor: Record<CoreColor, string> = {
  Teal: Teal.S500,
  Blue: Blue.S500,
  BlueGray: BlueGray.S900,
  White: White.S900,
} as const;

export const TextColor = {
  white: White.S900,
  quaternary: BlueGray.S200,
  tertiary: BlueGray.S300,
  secondary: BlueGray.S500,
  primary: BlueGray.S900,
  teal: Teal.S500,
  teal_hovered: Teal.S600,
  blue: Blue.S500,
  none: "unset", // Prisma 컴포넌트 내부에서만 사용합니다. 외부에서 color prop 값으로 사용하지 마세요.
} as const;

export const BackgroundColor = {
  primary: White.S900,
  off_white: BlueGray.S010,
  secondary: BlueGray.S050,
  tertiary: BlueGray.S100,
  quaternary: BlueGray.S200,
  quinary: BlueGray.S300,
  senary: BlueGray.S400,
  hovered: BlueGray.S700,
  pressed: BlueGray.S800,
  teal: Teal.S050,
  teal_enabled: Teal.S500,
  teal_hovered: Teal.S600,
  teal_pressed: Teal.S700,
  red: Red.S050,
  red_enabled: Red.S500,
  red_hovered: Red.S600,
  red_pressed: Red.S700,
} as const;

export const BorderColor = {
  active: Teal.S500,
  tertiary: BlueGray.S050,
  secondary: BlueGray.S100,
  quaternary: BlueGray.S200,
  error: Red.S500,
} as const;

export const StateColor = {
  error: {
    bg: Red.S050,
    text: Red.S500,
  },
  warning: {
    bg: Yellow.S050,
    text: Yellow.S600,
  },
  success: {
    bg: Green.S050,
    text: Green.S500,
  },
  information: {
    bg: Blue.S050,
    text: Blue.S500,
  },
} as const;

export const OverlayColor = {
  black_100: Black.S900,
  black_80: Black.S700,
  black_50: Black.S400,
  black_0: Black.S000,
  white_100: White.S900,
  white_0: White.S000,
} as const;
