import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./type.interface";

const cx = classNames.bind(styles);

const Button = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  
  // Tạo class động dựa trên props
  const classes = cx(
    "btn",
    `btn--${variant}`, // Đồng bộ dùng -- cho modifier
    `btn--${color}`,
    `btn--${size}`,
    {
      "btn--loading": isLoading,
    },
    className
  );

  return (
    <button
      className={classes}
      disabled={isLoading || disabled}
      {...props}
    >
      {/* 1. Hiện Spinner khi đang load */}
      {isLoading && <span className={cx("spinner")}></span>}

      {/* 2. Hiện Left Icon khi KHÔNG load */}
      {!isLoading && leftIcon && (
        <span className={cx("btn__icon-left")}>{leftIcon}</span>
      )}

      {/* 3. Nội dung chữ */}
      <span className={cx("btn__text")}>{children}</span>

      {/* 4. Hiện Right Icon khi KHÔNG load */}
      {!isLoading && rightIcon && (
        <span className={cx("btn__icon-right")}>{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;