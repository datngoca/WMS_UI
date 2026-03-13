import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx= classNames.bind(styles)
// 1. Định nghĩa "Thẻ nhãn" (Props)
interface ButtonProps{
    label: string;
    onClick?:() => void;
    variant?: "primary" | 'secondary';
    
}

// 2. Tạo Compnent "Khuôn đúc"
const Button = ({label, onClick, variant = "primary"}: ButtonProps)=>{
    return(
        <button
            onClick={onClick}
            className={cx("btn", variant)}>
            {label}
        </button>
    );
};

export default Button;

