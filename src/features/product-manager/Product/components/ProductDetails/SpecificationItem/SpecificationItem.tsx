import classNames from "classnames/bind";
import styles from "./SpecificationItem.module.scss";
import type { ProductDetailedSpec } from "../../types";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const cx = classNames.bind(styles);

interface SpecificationItemProps {
    spec: ProductDetailedSpec;
    className?: string;
}

const SpecificationItem = ({ spec, className }: SpecificationItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cx("specification-item", className)}>
            <div className={cx("specification-item__label")} onClick={() => setOpen(!open)}>
                {spec.groupName}
                <FaChevronDown className={cx("specification-item__label__icon", { "specification-item__label__icon--open": open })} />
            </div>

            <div className={cx("specification-item__content", { "specification-item__content--open": open })}>
                <div className={cx("specification-item__content-inner")}>
                    {spec.items.map((item, index) => (
                        <div key={index} className={cx("specification-item__details")}>
                            <div className={cx("specification-item__details__label")}>{item.label}</div>
                            <div className={cx("specification-item__details__value")}>{item.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecificationItem;
