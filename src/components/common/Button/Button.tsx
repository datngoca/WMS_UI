import classNames from "classnames/bind";
import type { CSSProperties } from "react";
import styles from "./Button.module.scss";
import type { ButtonProps } from "./type.interface";

const cx = classNames.bind(styles);

const Button = ({
  children,
  variant = "solid",
  color = "primary",
  size = "md",
  backgroundColor,
  textColor,
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  const hasCustomColors = Boolean(backgroundColor || textColor);

  const customStyle = hasCustomColors
    ? ({
        "--btn-custom-bg": backgroundColor,
        "--btn-custom-text": textColor,
        "--btn-custom-border": backgroundColor,
      } as CSSProperties)
    : undefined;

  const classes = cx(
    "btn",
    `btn--${variant}`,
    `btn--${color}`,
    `btn--${size}`,
    {
      "btn--loading": isLoading,
      "btn--custom-colors": hasCustomColors,
    },
    className
  );

  return (
    <button
      className={classes}
      style={customStyle}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <span className={cx("spinner")}></span>}

      {!isLoading && leftIcon && (
        <span className={cx("btn__icon-left")}>{leftIcon}</span>
      )}

      <span className={cx("btn__text")}>{children}</span>

      {!isLoading && rightIcon && (
        <span className={cx("btn__icon-right")}>{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
