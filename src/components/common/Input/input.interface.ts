
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
    value?: any;
    error?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: any) => void;
}

export interface TextFieldProps extends BaseInputProps {
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
}

export interface SelectFieldProps extends BaseInputProps {
    options?: Option[];
    multiple?: boolean;
}

export interface TreeFieldProps extends BaseInputProps {
    options?: TreeOption[];
    multiple?: boolean;
    cascade?: boolean;
}

export type InputProps = TextFieldProps | SelectFieldProps | TreeFieldProps;