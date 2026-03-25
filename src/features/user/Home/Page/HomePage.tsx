import classNames from "classnames/bind";
import styles from "./HomePage.module.scss";
import userBanner from "@/assets/img/user_banner.svg";
import Button from "@/components/Common/Button";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlinePhotoCamera, MdOutlineHeadphones } from "react-icons/md";
import { IoWatchOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import productIphone from "@/assets/img/product_iphone.svg";
import { CiHeart } from "react-icons/ci";


const cx = classNames.bind(styles);

const HomePage = () => {
    return (
        <div className={cx("page-user")}>
            <div className={cx("page-user__banner")}>
                <img src={userBanner} alt="user_banner" className={cx("page-user__banner__img")} />
                <div className={cx("page-user__banner__content")}>
                    <h1 className={cx("page-user__banner__content__title")}>IPhone 14 Pro</h1>
                    <p className={cx("page-user__banner__content__description")}>Created to change everything for the better. For everyone</p>
                    <Button variant="outline" color="white">Shop Now</Button>
                </div>
            </div>
            <div className={cx("page-user__category")}>
                <div className={cx("page-user__category__top")}>
                    <h3 className={cx("page-user__category__top__title")}>Browse By Category</h3>
                    <div className={cx("page-user__category__top__arrow")}>
                        <FaArrowLeft />
                        <FaArrowRight />
                    </div>
                </div>
                <div className={cx("page-user__category__bottom")}>
                    <div className={cx("page-user__category__bottom__item")}>
                        <MdOutlinePhoneAndroid className={cx("page-user__category__bottom__item__icon")} />
                        <h4 className={cx("page-user__category__bottom__item__title")}>Phone</h4>
                    </div>
                    <div className={cx("page-user__category__bottom__item")}>
                        <IoWatchOutline className={cx("page-user__category__bottom__item__icon")} />
                        <h4 className={cx("page-user__category__bottom__item__title")}>Smart Watches</h4>
                    </div>
                    <div className={cx("page-user__category__bottom__item")}>
                        <MdOutlinePhotoCamera className={cx("page-user__category__bottom__item__icon")} />
                        <h4 className={cx("page-user__category__bottom__item__title")}>Cameras</h4>
                    </div>
                    <div className={cx("page-user__category__bottom__item")}>
                        <MdOutlineHeadphones className={cx("page-user__category__bottom__item__icon")} />
                        <h4 className={cx("page-user__category__bottom__item__title")}>Headphones</h4>
                    </div>
                    <div className={cx("page-user__category__bottom__item")}>
                        <HiOutlineDesktopComputer className={cx("page-user__category__bottom__item__icon")} />
                        <h4 className={cx("page-user__category__bottom__item__title")}>Computers</h4>
                    </div>
                    <div className={cx("page-user__category__bottom__item")}>
                        <SiYoutubegaming className={cx("page-user__category__bottom__item__icon")} />
                        <h4 className={cx("page-user__category__bottom__item__title")}>Gaming</h4>
                    </div>
                </div>
            </div>
            <div className={cx("page-user__products")}>
                <div className={cx("page-user__products__tags")}>
                    <div className={cx("page-user__products__tags__item")}>New Arrival</div>
                    <div className={cx("page-user__products__tags__item")}>Best Seller</div>
                    <div className={cx("page-user__products__tags__item")}>Featured Products</div>
                </div>
                <div className={cx("page-user__products__list")}>
                    <div className={cx("page-user__products__list__item")}>
                        <img src={productIphone} alt="user_banner" className={cx("page-user__products__list__item__img")} />
                        <h4 className={cx("page-user__products__list__item__title")}>IPhone 14 Pro</h4>
                        <p className={cx("page-user__products__list__item__price")}>$999</p>
                        <Button variant="solid" backgroundColor="#000000" textColor="#ffffff">Buy Now</Button>
                        <CiHeart className={cx("page-user__products__list__item__favorite")} />
                    </div>
                    <div className={cx("page-user__products__list__item")}>
                        <img src={productIphone} alt="user_banner" className={cx("page-user__products__list__item__img")} />
                        <h4 className={cx("page-user__products__list__item__title")}>IPhone 14 Pro</h4>
                        <p className={cx("page-user__products__list__item__price")}>$999</p>
                        <Button variant="solid" backgroundColor="#000000" textColor="#ffffff">Buy Now</Button>
                        <FaHeart className={cx("page-user__products__list__item__favorite", "page-user__products__list__item__favorite--active")} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;