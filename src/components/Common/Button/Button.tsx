import classNames from "classnames/bind";
import styles from "./Button.module.scss";

import type { ButtonProps } from "./type.interface";

const cx = classNames.bind(styles);
// 1. Định nghĩa "Thẻ nhãn" (Props)

// 2. Tạo Compnent "Khuôn đúc"
const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  leftIcon,
  rightIcon,
  classNames,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx("btn", `btn__${variant}`, `btn__${size}`, classNames)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <span className={cx("spiner")}></span>}
      {isLoading && leftIcon && <span className={cx("btn__icon-left")}>{leftIcon}</span>}
      <span className={cx("btn__text")}>{children}</span>
      {isLoading && rightIcon && <span className={cx("btn__icon-left")}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
