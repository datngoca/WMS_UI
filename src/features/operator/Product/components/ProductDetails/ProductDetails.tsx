import classNames from "classnames/bind";
import styles from "./ProductDetails.module.scss";
import type { Product } from "../../types";

const cx = classNames.bind(styles);

interface ProductDetailsProps {
    className?: string;
    open: boolean;
    onClose: () => void;
    product: Product;
}

const ProductDetails = ({ className, open, onClose, product }: ProductDetailsProps) => {
    if (!open) return null;
    return (
        <div className={cx("product-details", className)}>
            <h1>Product Details</h1>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.sku}</p>
            <p>{product.category}</p>

        </div>
    );
}
export default ProductDetails;