import classNames from "classnames/bind";
import styles from "../Input.module.scss";
import type { TextFieldProps } from "../input.interface";
import { forwardRef } from "react";

const cx = classNames.bind(styles);

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ type = "text", prefixIcon, suffixIcon, onChange, ...rest }, ref) => {
    return (
        <div className={cx("text-field", "field")}>
            {/* Icon phía trước (Ví dụ: icon tìm kiếm, icon User) */}
            {prefixIcon && <div className={cx("text-field__prefix")}>{prefixIcon}</div>}
            <input ref={ref} type={type} className={cx("text-field__input")} onChange={(e) => onChange?.(e.target.value)} {...rest} />
            {/* Icon phía sau (Ví dụ: icon hiện/ẩn mật khẩu, icon đơn vị kg, m...) */}
            {suffixIcon && <div className={cx("text-field__suffix")}>{suffixIcon}</div>}
        </div>
    )
});

TextField.displayName = "TextField";

export default TextField;