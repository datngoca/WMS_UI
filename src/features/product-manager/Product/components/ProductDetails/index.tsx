import classNames from "classnames/bind";
import styles from "./ProductDetails.module.scss";
import type { Product } from "../../types";
import GeneralInfo from "./GeneralInfo";
import Specification from "./Specification";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const cx = classNames.bind(styles);

interface ProductDetailsProps {
    className?: string;
    onClose: () => void;
    product: Product;
}

const ProductDetails = ({ className, onClose, product }: ProductDetailsProps) => {


    const [activeTab, setActiveTab] = useState("general-info");

    if (!product) {
        return <div className={cx("product-details", className)}></div>;
    }
    const tabs = [
        {
            key: "general-info",
            label: "General Info",
            content: <GeneralInfo product={product} />,
        },
        {
            key: "specification",
            label: "Specification",
            content: <Specification product={product} />,
        },
    ];



    return (
        <div className={cx("product-details", className)}>
            <div className={cx("product-details__header")}>
                <h2 className={cx("product-details__header__title")}>Product Details</h2>
                <button onClick={onClose} className={cx("product-details__header__close")}>
                    <FaXmark />
                </button>
            </div>

            <div className={cx("product-details__side-bar")}>
                {tabs.map((tab) => (
                    <div
                        key={tab.key}
                        className={cx("product-details__side-bar__item", {
                            "product-details__side-bar__item--active": activeTab === tab.key,
                        })}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className={cx("product-details__content")}>
                {tabs.find((tab) => tab.key === activeTab)?.content}
            </div>
        </div>
    );
}
export default ProductDetails;