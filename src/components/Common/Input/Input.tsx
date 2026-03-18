import classNames from "classnames/bind";
import styles from "./Input.module.scss";
import { useState } from "react";
import { FaWindowClose, FaCheck, FaAngleDown } from "react-icons/fa";

const cx = classNames.bind(styles);

interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  errorMessage?: string;
  icon?: React.ReactNode;
  className?: string;
  options?: { label: string; value: string }[];
  isMultiple?: boolean;
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
  options,
  isMultiple = false,
}: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(value as string[]);

  const handleSelectValue = (value: string) => {
    let newValues: string[];

    if (isMultiple) {
      if (selectedValues.includes(value)) {
        newValues = selectedValues.filter((v) => v !== value);
      } else {
        newValues = [...selectedValues, value];
      }
    } else {
      newValues = [value];
    }

    // Vừa update state nội bộ, vừa bắn mảng mới MỚI tính được lên cha
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  const handleRemoveValue = (value: string) => {
    const newValues = selectedValues.filter((v) => v !== value);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };


  return (
    <div className={cx("input", className)}>
      <div className={cx("input__outline")}>
        <div className={cx("input__outline__field", {
          "input__outline__field--error": errorMessage,
        })}>
          {type === "select" ? (
            <div className={cx("input__outline__field__select")}>
              {isMultiple ? (
                <div className={cx("input__outline__field__select__multiple")}>
                  {Array.isArray(selectedValues) && selectedValues.map((val) => (
                    <div key={val} className={cx("input__outline__field__select__tag")}>
                      {val}
                      <FaWindowClose onClick={() => handleRemoveValue(val)} className={cx("input__outline__field__select__tag__icon")} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={cx("input__outline__field__select__single")}>
                  <span className={cx("input__outline__field__select__value")}>{value}</span>
                </div>
              )}
              <FaAngleDown onClick={() => { setIsOpen(!isOpen) }} className={cx("input__outline__field__select__icon-down", {
                "input__outline__field__select__icon-down--active": isOpen,
              })} />
            </div>
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange?.(e.target.value)}
            />
          )}
        </div>
        {isOpen && (
          <div className={cx("input__outline__field__select__dropdown")}>
            {options?.map((option) => (
              <div onClick={() => handleSelectValue(option.value)} key={option.value} className={cx("input__outline__field__select__dropdown__item", {
                "input__outline__field__select__dropdown__item--active": isMultiple && selectedValues.includes(option.value),
              })}>
                {option.label}
                {isMultiple && selectedValues.includes(option.value) && <FaCheck className={cx("input__outline__field__select__dropdown__item__icon")} />}
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
