import classNames from "classnames/bind";
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  errorMessage,
  icon,
  className,
}: InputProps) => {
  return (
    <div className={cx("input", className)}>
      <div className={cx("input__outline")}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className={cx("input__outline__field", {
            "input__outline__field--error": errorMessage,
          })}
        />
        {icon && <span className={cx("input__outline__icon")}>{icon}</span>}
        {label && <span className={cx("input__outline__label")}>{label}</span>}
      </div>
      {errorMessage && (
        <span className={cx("input__error")}>{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
