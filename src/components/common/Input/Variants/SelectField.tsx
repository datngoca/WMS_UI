import classNames from "classnames/bind";
import styles from "../Input.module.scss";
import type { Option, SelectFieldProps } from "../input.interface";
import { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import Dropdown from "../Shared/Dropdown";
import Tag from "../Shared/Tag"
const cx = classNames.bind(styles);


const SelectField = (props: SelectFieldProps) => {
    const { options, value, onChange, placeholder, multiple } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (option: Option) => {
        if (multiple) {
            const isSelected = value.some((item: Option) => item.id === option.id);
            if (isSelected) {
                onChange?.(value.filter((item: Option) => item.id !== option.id));
            } else {
                onChange?.([...value, option]);
            }
        } else {
            onChange?.(option);
            setIsOpen(false);
        }
    }
    const handleRemove = (option: Option) => {
        onChange?.(value.filter((item: Option) => item.id !== option.id));
    }


    return (
        <div className={cx("select-field", "field")} onClick={handleToggle}>
            {/* Nếu có value thì hiện label/tags, không thì hiện placeholder */}
            <div className={cx("select-field__value")}>
                {multiple ? (
                    value.map((item: Option) => (
                        <Tag key={item.id} tag={item.label} onRemove={() => handleRemove(item)} />
                    ))
                ) : (
                    value ? value : placeholder || "Select options..."
                )}
            </div>
            <div className={cx("select-field__suffix")}>
                <FaChevronDown />
            </div>
            <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ul className={cx("select-field__options")}>
                    {options?.map((option: Option) => (
                        <div className={cx("select-field__options__item")} onClick={() => handleSelect(option)}>
                            {option.label}
                            {multiple && value.some((item: Option) => item.id === option.id) && (
                                <FaCheck className={cx("select-field__options__item__check")} />
                            )}
                        </div>
                    ))}
                </ul>
            </Dropdown>
        </div>
    )
}

export default SelectField