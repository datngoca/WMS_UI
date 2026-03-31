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
import ProductCard from "../../../../components/user/ProductCard/ProductCard";

const product = {
    id: "1",
    name: "IPhone 14 Pro",
    price: 999,
    image: productIphone,
}

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
                    <div className={cx("page-user__products__tags__item", "page-user__products__tags__item--active")}>New Arrival</div>
                    <div className={cx("page-user__products__tags__item")}>Best Seller</div>
                    <div className={cx("page-user__products__tags__item")}>Featured Products</div>
                </div>
                <div className={cx("page-user__products__list")}>
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                </div>
            </div>
            <div className={cx("page-user__discounts")}>
                <div className={cx("page-user__discounts__title")}>Discounts up to 50%</div>
                <div className={cx("page-user__products__list")}>
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;