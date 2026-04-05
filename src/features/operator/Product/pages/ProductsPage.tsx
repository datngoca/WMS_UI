import classNames from "classnames/bind";
import styles from "./ProductsPage.module.scss";
import { useProducts } from "../hooks/useProduct";
import TableProducts from "../components/TableProducts/TableProducts";
import Button from "@/components/Common/Button";
import ProductDetails from "../components/ProductDetails/ProductDetails";
const cx = classNames.bind(styles);

const ProductsPage = () => {
    const { data: products } = useProducts();
    return (
        <div className={cx("product-page")}>
            <div className={cx("product-page__content")}>
                <div className={cx("product-page__header")}>
                    <h1>Products</h1>
                    <Button
                        size="sm"
                        variant="outline"
                        color="secondary"
                        onClick={() => { }}
                    >
                        Thêm sản phẩm
                    </Button>
                </div>
                <div className={cx("product-page__content__body")}>
                    <TableProducts
                        data={products?.data || []}
                        onEdit={(record) => { console.log("Edit", record) }}
                        onDelete={(record) => { console.log("Delete", record) }}
                        onRowClick={(record) => { console.log("Row Click", record) }}
                    />
                </div>
            </div>
            <ProductDetails open={true} onClose={() => { }} product={products?.data[0] || {}} className={cx("product-page__product-details")} />
        </div>
    );
}
export default ProductsPage;