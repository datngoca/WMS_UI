import classNames from "classnames/bind";
import styles from "./ProductDetails.module.scss";
import GeneralInfo from "./GeneralInfo";
import Specification from "./Specification";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useProduct } from "../../hooks/useProduct";

const cx = classNames.bind(styles);

interface ProductDetailsProps {
    className?: string;
    onClose: () => void;
    productId: number | null;
}

const ProductDetails = ({ className, onClose, productId }: ProductDetailsProps) => {
    const { data: product } = useProduct(productId);
    const [activeTab, setActiveTab] = useState("general-info");

    if (!productId) {
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