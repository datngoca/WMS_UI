import { forwardRef } from "react";
import type { InputProps } from "./input.interface";
import InputLayout from "./Layout/InputLayout";

import TextField from "./Variants/TextField";
import SelectField from "./Variants/SelectField";
import TreeField from "./Variants/TreeField";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type, label, error, required, className, readOnly } = props;

  const renderContent = () => {
    switch (type) {
      case "select":
        return <SelectField {...props} />;
      case "tree":
        return <TreeField {...props} />;
      default:
        return <TextField ref={ref} {...props} />;
    }
  };

  return (
    <InputLayout
      readOnly={readOnly}
      label={label}
      error={error}
      required={required}
      className={className}
    >
      {renderContent()}
    </InputLayout>
  );
});

Input.displayName = "Input";

export default Input;
