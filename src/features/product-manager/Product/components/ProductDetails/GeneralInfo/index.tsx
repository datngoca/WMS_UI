import classNames from "classnames/bind";
import styles from "./GeneralInfo.module.scss";
import type { Product } from "../../types";

const cx = classNames.bind(styles);

interface GeneralInfoProps {
    product: Product;
}

const GeneralInfo = ({ product }: GeneralInfoProps) => {
    return (
        <div className={cx("general-info")}>
            <div className={cx("general-info__item")}>
                <div className={cx("general-info__item__label")}>Product Name</div>
                <div className={cx("general-info__item__value")}>{product.name}</div>
            </div>
            <div className={cx("general-info__item")}>
                <div className={cx("general-info__item__label")}>SKU</div>
                <div className={cx("general-info__item__value")}>{product.sku}</div>
            </div>
            <div className={cx("general-info__item")}>
                <div className={cx("general-info__item__label")}>Category</div>
                <div className={cx("general-info__item__value")}>{product.category}</div>
            </div>
            <div className={cx("general-info__item")}>
                <div className={cx("general-info__item__label")}>Base Price</div>
                <div className={cx("general-info__item__value")}>{product.basePrice}</div>
            </div>
            <div className={cx("general-info__item")}>
                <div className={cx("general-info__item__label")}>Description</div>
                <div className={cx("general-info__item__value")}>{product.description}</div>
            </div>
            <div className={cx("general-info__item")}>
                <div className={cx("general-info__item__label")}>Original Price</div>
                <div className={cx("general-info__item__value")}>{product.originalPrice}</div>
            </div>
        </div>
    );
}
export default GeneralInfo;