export interface Value {
  id: number;
  label: string;
}

export interface Option {
  id: number;
  label: string;
}

export interface TreeOption extends Option {
  children: TreeOption[];
}

export interface BaseInputProps {
  type: string;
  className?: string;
  name?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: any) => void;
}

export interface TextFieldProps extends Omit<BaseInputProps, "type"> {
  type: "text" | "password" | "number" | "email" | "tel" | "url";
  value?: string | number;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

export interface SelectFieldProps extends Omit<BaseInputProps, "type"> {
  type: "select";
  options: Option[];
  value?: Value | Value[];
  multiple?: boolean;
}

export interface TreeFieldProps extends Omit<BaseInputProps, "type"> {
  type: "tree";
  options: TreeOption[];
  multiple?: boolean;
  value?: Value | Value[];
  cascade?: boolean;
}

export type InputProps = TextFieldProps | SelectFieldProps | TreeFieldProps;
