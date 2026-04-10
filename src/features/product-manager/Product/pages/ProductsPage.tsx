import classNames from "classnames/bind";
import styles from "./ProductsPage.module.scss";
import { useProducts } from "../hooks/useProduct";
import TableProducts from "../components/TableProducts/TableProducts";
import Button from "@/components/Common/Button";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useState } from "react";
import type { Product } from "../types";
import ModalProduct from "../components/ModalProduct/ModalProduct";
const cx = classNames.bind(styles);

const ProductsPage = () => {
    const { data: products } = useProducts();
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const handleRowClick = (record: Product) => {
        setSelectedProduct(record);
        setOpen(true);
    };
    return (
        <div className={cx("product-page")}>
            <div className={cx("product-page__content")}>
                <div className={cx("product-page__header")}>
                    <h1>Products</h1>
                    <Button
                        size="sm"
                        variant="outline"
                        color="secondary"
                        onClick={() => { setOpenModal(true) }}
                    >
                        Thêm sản phẩm
                    </Button>
                </div>
                <div className={cx("product-page__content__body")}>
                    <TableProducts
                        data={products?.data || []}
                        onRowClick={handleRowClick}
                    />
                </div>
            </div>
            <ProductDetails
                onClose={() => setOpen(false)}
                product={selectedProduct as Product}
                className={cx("product-page__product-details", { "product-page__product-details--closed": !open })}
            />
            <ModalProduct
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                product={selectedProduct as Product}
            />
        </div>
    );
}
export default ProductsPage;