import classNames from "classnames/bind";
import styles from "./ProductPage.module.scss";
const cx = classNames.bind(styles);

const ProductPage = () => {
    return (
        <div className={cx("product-page")}>
            {/* -------------- Main Info -------------- */}
            <div className={cx("product-page__main-info")}>
                <div className={cx("product-page__main-info__image")}>
                   
                </div>
                <div className={cx("product-page__main-info__content")}></div>
            </div>

            {/* -------------- Details -------------- */}
            <div className={cx("product-page__details")}>

            </div>

            {/* -------------- Reviews -------------- */}
            <div className={cx("product-page__reviews")}>

            </div>

            {/* -------------- Related Products -------------- */}
            <div className={cx("product-page__related-products")}>

            </div>
        </div>
    );
};

export default ProductPage;