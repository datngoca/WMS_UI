import type { InputProps } from "./input.interface";
import InputLayout from "./Layout/InputLayout";

import TextField from "./Variants/TextField";
import SelectField from "./Variants/SelectField";
import TreeField from "./Variants/TreeField";

const Input = (props: InputProps) => {
  const { type, label, error, required, className, readOnly } = props;

  const renderContent = () => {
    switch (type) {
      case "select":
        return <SelectField {...props} />;
      case "tree":
        return <TreeField {...props} />;
      default:
        return <TextField {...props} />;
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
};

export default Input;
