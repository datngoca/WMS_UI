import classNames from "classnames/bind";
import styles from "./Info.module.scss";
import type { ProductMockData } from "../../pages/ProductPage";

const cx = classNames.bind(styles);

interface InfoProps {
    data: ProductMockData;
}

const Info = ({ data }: InfoProps) => {
    return (
        <div className={cx("info")}>
            <div className={cx("info__title")}>
                {data.name}
            </div>
            <div className={cx("info__price")}>
                ${data.price} <span className={cx("info__price__original")}>${data.originalPrice}</span>
            </div>
            <div className={cx("info__select")}>
                <div className={cx("info__select__options")}>
                    {data.options.map(option => (
                        <div key={option.name} className={cx("info__select__option")}>
                            <div className={cx("info__select__option__title")}>
                                {option.name === "Color" ? "Select Color :" : option.name}
                            </div>
                            <div className={cx("info__select__option__list")}>
                                {option.values.map(val => (
                                    option.type === "color" ? (
                                        <div 
                                            key={val.label}
                                            className={cx("info__select__option__list__item", "info__select__option__list__item--color")}
                                            style={{ backgroundColor: val.value }}
                                            title={val.label}
                                        />
                                    ) : (
                                        <div 
                                            key={val.label}
                                            className={cx("info__select__option__list__item", "info__select__option__list__item--button")}
                                        >
                                            {val.label}
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx("info__select__product-info")}>
                        <div className={cx("info__select__product-info__content")}>
                            {data.specs.map(spec => (
                                <div key={spec.label} className={cx("info__select__product-info__content__item")}>
                                    <div className={cx("info__select__product-info__content__item__label")}>{spec.label}</div>
                                    <div className={cx("info__select__product-info__content__item__value")}>{spec.value}</div>
                                </div>
                            ))}
                        </div>
                        <div className={cx("info__select__product-description")}>
                            {data.description}
                        </div>
                    </div>
                </div>



            <div className={cx("info__action")}>
                <button className={cx("info__action__add-to-cart")}>
                    Add to Wishlist
                </button>
                <button className={cx("info__action__buy-now")}>
                    Add to Card
                </button>
            </div>
            
            <div className={cx("info__delivery-info")}>
                <div className={cx("info__delivery-info__item")}>
                    <div className={cx("info__delivery-info__item-icon")}>
                        🚚
                    </div>
                    <div>
                        <div className={cx("info__delivery-info__item-label")}>Free Delivery</div>
                        <div className={cx("info__delivery-info__item-value")}>{data.delivery.freeDelivery}</div>
                    </div>
                </div>
                <div className={cx("info__delivery-info__item")}>
                    <div className={cx("info__delivery-info__item-icon")}>
                        🏪
                    </div>
                    <div>
                        <div className={cx("info__delivery-info__item-label")}>In Stock</div>
                        <div className={cx("info__delivery-info__item-value")}>{data.delivery.inStock}</div>
                    </div>
                </div>
                <div className={cx("info__delivery-info__item")}>
                    <div className={cx("info__delivery-info__item-icon")}>
                        ✔️
                    </div>
                    <div>
                        <div className={cx("info__delivery-info__item-label")}>Guaranteed</div>
                        <div className={cx("info__delivery-info__item-value")}>{data.delivery.guaranteed}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;