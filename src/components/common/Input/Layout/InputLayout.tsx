import classNames from "classnames/bind";
import styles from "../Input.module.scss";

const cx = classNames.bind(styles);

interface LayoutProps {
    label?: string;
    error?: string,
    required?: boolean;
    children?: React.ReactNode;
    className?: string;
    readOnly?: boolean;
}

const InputLayout = ({ label, error, required, children, className, readOnly }: LayoutProps) => {
    return (
        <div className={cx("input-layout", className, { "input-layout--readOnly": readOnly })}>
            {label && <label className={cx("input-layout__label")}>
                {label} {required && <span className={cx("input-layout__label__required")}>*</span>}
            </label>}
            <div className={cx("input-layout__content", { "input-layout__content--error": error })}>
                {children}
            </div>
            <div className={cx("input-layout__error-area")}>
                {error && <span className={cx("input-layout__error-area__text")}>{error}</span>}
            </div>
        </div>
    )
}

export default InputLayout;