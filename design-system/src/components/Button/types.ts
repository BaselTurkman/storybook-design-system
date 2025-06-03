type Variant = "primary" | "secondary" | "text";
type Size = "small" | "medium" | "large";
type Color = "blue" | "green" | "red";

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  color?: Color;
  children: React.ReactNode;
  onClick?: () => void;
};
