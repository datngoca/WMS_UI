import classNames from "classnames/bind";
import styles from "./FooterLayoutUser.module.scss";
import logoBranch from "@/assets/img/logo_branch_light.svg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const cx = classNames.bind(styles);

const FooterLayoutUser = () => {
    return (
        <div className={cx("footer")}>
            <div className={cx("footer__section-left")}>
                <div className={cx("footer__section-left__top")}>
                    <img src={logoBranch} alt="logo_branch" className={cx("footer__section-left__top__logo")} />
                    <span className={cx("footer__section-left__top__title")}>
                        We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                    </span>
                </div>
                <div className={cx("footer__section-left__bottom")}>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>

            <div className={cx("footer__section-middle")}>
                <h3>
                    Services
                </h3>
                <ul>
                    <li><a href="#">Bouns programing</a></li>
                    <li><a href="#">Gift cards</a></li>
                    <li><a href="#">Credit and payment</a></li>
                    <li><a href="#">Service contracts</a></li>
                    <li><a href="#">Non-cash account</a></li>
                    <li><a href="#">Payment methods</a></li>
                </ul>
            </div>

            <div className={cx("footer__section-right")}>
                <h3>
                    Assistance to the buyer
                </h3>
                <ul>
                    <li><a href="#">Find an order</a></li>
                    <li><a href="#">Terms of delivery</a></li>
                    <li><a href="#">Exchange and return of goods</a></li>
                    <li><a href="#">Guarantee</a></li>
                    <li><a href="#">Frequently asked questions</a></li>
                    <li><a href="#">Terms of use of the site</a></li>
                </ul>

            </div>

        </div>
    );
};

export default FooterLayoutUser;
