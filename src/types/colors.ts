export type ColorTypes =
  | "primary"
  | "secondary"
  | "black"
  | "white"
  | "gray-10"
  | "gray-25"
  | "gray-50"
  | "gray-75"
  | "gray-100";

type TColors = {
  [key in ColorTypes]: string;
};

export const Colors: TColors = {
  primary: "#3e0930",
  secondary: "#db005f",
  black: "#14000f",
  white: "#f0f0f0",
  "gray-10": "#edeced",
  "gray-25": "#d0cfd0",
  "gray-50": "#a39fa2",
  "gray-75": "#746f73",
  "gray-100": "#463e44",
};
