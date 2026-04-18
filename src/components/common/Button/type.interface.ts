export type ButtonVariant = "solid" | "outline" | "ghost";

export type ButtonColor = "primary" | "secondary" | "destructive" | "info" | "success" | "warning" | "white" | "black";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  backgroundColor?: string;
  textColor?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
