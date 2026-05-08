import classNames from "classnames/bind";
import styles from "./ProductsPage.module.scss";
import { useProducts } from "../hooks/useProduct";
import TableProducts from "../components/TableProducts";
import Button from "@/components/common/Button";
import ProductDetails from "../components/ProductDetails";
import { useState } from "react";
import ModalProduct from "../components/ModalProduct";
import { FaPlus } from "react-icons/fa";
const cx = classNames.bind(styles);

const ProductsPage = () => {
    const { data: products } = useProducts();
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const handleRowClick = (productId: number) => {
        setSelectedProductId(productId);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedProductId(null);
    };
    return (
        <div className={cx("product-page")}>
            <div className={cx("product-page__content")}>
                <div className={cx("product-page__header")}>
                    <h1>Products</h1>
                    <Button
                        size="sm"
                        variant="ghost"
                        color="primary"
                        onClick={() => { setOpenModal(true) }}
                        leftIcon={<FaPlus />}
                    >

                        Thêm sản phẩm
                    </Button>
                </div>
                <div className={cx("product-page__content__body")}>
                    <TableProducts
                        data={products?.data || []}
                        onRowClick={handleRowClick}
                        onEdit={(record) => {
                            setSelectedProductId(record.id);
                            setOpenModal(true);
                        }}
                    />
                </div>
            </div>
            <ProductDetails
                onClose={handleCloseModal}
                productId={selectedProductId || null}
                className={cx("product-page__product-details", { "product-page__product-details--closed": !open })}
            />
            <ModalProduct
                isOpen={openModal}
                onClose={handleCloseModal}
                productId={selectedProductId}
            />
        </div>
    );
}
export default ProductsPage;