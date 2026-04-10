import classNames from "classnames/bind";
import styles from "./Specification.module.scss";
import type { Product } from "../../types";
import SpecificationItem from "../SpecificationItem";

const cx = classNames.bind(styles);

interface SpecificationProps {
    product: Product;
}

const Specification = ({ product }: SpecificationProps) => {
    return (
        <div className={cx("specification")}>
            {product.detailedSpecs.map((spec, index) => (
                <SpecificationItem key={index} spec={spec} />
            ))}
        </div>
    );
}
export default Specification;