import classNames from "classnames/bind";
import styles from "./Specification.module.scss";
import SpecificationItem from "./SpecificationItem";
import type { Product } from "../../../types/product.interface";

const cx = classNames.bind(styles);

interface SpecificationProps {
    product?: Product;
}

const Specification = ({ product }: SpecificationProps) => {
    return (
        <div className={cx("specification")}>
            {product?.detailedSpecs.map((spec, index) => (
                <SpecificationItem key={index} spec={spec} />
            ))}
        </div>
    );
}
export default Specification;