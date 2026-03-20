import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import { useMemo, useState } from "react";
import { FaWindowClose, FaCheck, FaAngleDown } from "react-icons/fa";

const cx = classNames.bind(styles);

interface InputProps<T = string | number | boolean> {
  label?: string;
  type: string;
  placeholder?: string;
  value?: T | T[];
  onChange?: (value: T | T[]) => void;
  errorMessage?: string;
  icon?: React.ReactNode;
  className?: string;
  options?: { label: string; value: T }[];
  isMultiple?: boolean;
}

const Input = <T = string | number | boolean,>({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  errorMessage,
  icon,
  className,
  options,
  isMultiple = false,
}: InputProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentValues = useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  const handleSelectValue = (selectedValue: T) => {
    let newValues;
    if (isMultiple) {
      newValues = currentValues.includes(selectedValue)
        ? currentValues.filter((v) => v !== selectedValue)
        : [...currentValues, selectedValue];
    } else {
      newValues = selectedValue;
      setIsOpen(false);
    }
    onChange?.(newValues);
  };

  const handleRemoveValue = (selectedValue: T) => {
    const newValues = currentValues.filter((v) => v !== selectedValue);
    onChange?.(newValues);
  };
  return (
    <div className={cx("input", className)}>
      <div className={cx("input__outline")}>
        <div
          className={cx("input__outline__field", {
            "input__outline__field--error": errorMessage,
          })}
        >
          {type === "select" ? (
            <div className={cx("input__outline__field__select")}>
              {isMultiple ? (
                <div className={cx("input__outline__field__select__multiple")}>
                  {Array.isArray(currentValues) &&
                    currentValues.map((val) => (
                      <div
                        key={String(val)}
                        className={cx("input__outline__field__select__tag")}
                      >
                        {String(val)}
                        <FaWindowClose
                          onClick={() => handleRemoveValue(val)}
                          className={cx(
                            "input__outline__field__select__tag__icon",
                          )}
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <div className={cx("input__outline__field__select__single")}>
                  <span className={cx("input__outline__field__select__value")}>
                    {String(value)}
                  </span>
                </div>
              )}
              <FaAngleDown
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={cx("input__outline__field__select__icon-down", {
                  "input__outline__field__select__icon-down--active": isOpen,
                })}
              />
            </div>
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              value={(value as string | number | readonly string[]) ?? ""}
              onChange={(e) => onChange?.(e.target.value as unknown as T)}
            />
          )}
        </div>
        {isOpen && (
          <div className={cx("input__outline__field__select__dropdown")}>
            {options?.map((option) => (
              <div
                onClick={() => handleSelectValue(option.value)}
                key={String(option.value)}
                className={cx("input__outline__field__select__dropdown__item", {
                  "input__outline__field__select__dropdown__item--active":
                    isMultiple && currentValues.includes(option.value),
                })}
              >
                {option.label}
                {isMultiple && currentValues.includes(option.value) && (
                  <FaCheck
                    className={cx(
                      "input__outline__field__select__dropdown__item__icon",
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        )}
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
