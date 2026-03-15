 export type ButtonVariant = "solid" | "outline" | "ghost";

 export type ButtonColor = "primary" | "secondary" | "destructive" | "info" | "success" | "warning";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: () => void;
}
