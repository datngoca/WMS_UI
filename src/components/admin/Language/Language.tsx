import classNames from "classnames/bind";
import styles from "./Language.module.scss";
import { FaCheck } from "react-icons/fa";
import flagEn from "@/assets/img/flag-en.png";

const cx = classNames.bind(styles);

interface LanguageProps {
    className?: string;

}

const Language = ({ className }: LanguageProps) => {
    return (
        <div className={cx("language", className)}>
            <div className={cx("language__content")}>
                <img src={flagEn} alt="English" className={cx("language__content__flag")} />
                <span className={cx("language__content__name")}>English</span>
            </div>
            <FaCheck className={cx("language__language-check")} />
        </div>
    );
};

export default Language;