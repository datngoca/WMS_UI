import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import Button from "@/components/Common/Button";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const cx = classNames.bind(styles);

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        favorite?: boolean;
    };
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={cx("product-card")}>
            <img src={product.image} alt="user_banner" className={cx("product-card__img")} />
            <h4 className={cx("product-card__title")}>{product.name}</h4>
            <p className={cx("product-card__price")}>$ {product.price}</p>
            <Button variant="solid" backgroundColor="#000000" textColor="#ffffff">Buy Now</Button>
            {product.favorite ? <FaHeart className={cx("product-card__favorite", "product-card__favorite--active")} /> : <FaRegHeart className={cx("product-card__favorite")} />}
        </div>
    );
};

export default ProductCard;