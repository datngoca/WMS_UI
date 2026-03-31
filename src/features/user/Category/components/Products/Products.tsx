import classNames from "classnames/bind";
import styles from "./Products.module.scss";
import ProductCard from "@/components/user/ProductCard/ProductCard";
import productImg from "@/assets/img/product_iphone.svg";
const cx = classNames.bind(styles);

const Products = () => {
    return (
        <div className={cx("products")}>
            <ProductCard product={{ id: "1", name: "Product 1", price: 100, image: productImg, favorite: true }} />
            <ProductCard product={{ id: "2", name: "Product 2", price: 200, image: productImg, favorite: false }} />
            <ProductCard product={{ id: "3", name: "Product 3", price: 300, image: productImg, favorite: true }} />
            <ProductCard product={{ id: "4", name: "Product 4", price: 400, image: productImg, favorite: false }} />
            <ProductCard product={{ id: "5", name: "Product 5", price: 500, image: productImg, favorite: true }} />
            <ProductCard product={{ id: "6", name: "Product 6", price: 600, image: productImg, favorite: false }} />
            <ProductCard product={{ id: "7", name: "Product 7", price: 700, image: productImg, favorite: true }} />
            <ProductCard product={{ id: "8", name: "Product 8", price: 800, image: productImg, favorite: false }} />
            <ProductCard product={{ id: "9", name: "Product 9", price: 900, image: productImg, favorite: true }} />
            <ProductCard product={{ id: "10", name: "Product 10", price: 1000, image: productImg, favorite: false }} />
            <ProductCard product={{ id: "11", name: "Product 11", price: 1100, image: productImg, favorite: true }} />
            <ProductCard product={{ id: "12", name: "Product 12", price: 1200, image: productImg, favorite: false }} />
        </div>
    );
};

export default Products;