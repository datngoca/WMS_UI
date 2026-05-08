import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product, ProductRequest } from "../../types/product.interface";
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import Form from "./Form";
import { useProductMutations } from "../../hooks/useProductMutations";
import { useProduct } from "../../hooks/useProduct"
import { getInitialFormState, transformToRequest } from "../../utils/productTransform";

const cx = classNames.bind(styles);

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number | null;
}



const ModalProduct = ({ isOpen, onClose, productId }: ModalProductProps) => {
  const { createProduct, updateProduct } = useProductMutations();

  const { data: product } = useProduct(productId);

  const formState: Product = getInitialFormState(product);

  const handleSubmit = (data: Product) => {
    // 1. Transform Dữ Liệu (Biến đổi mảng productUnits sang định dạng ProductUnitRequest của Backend)
    const payload: ProductRequest = transformToRequest(data);

    // 2. Gửi Payload lên Server
    if (productId) {
      updateProduct({ id: productId, product: payload });
    } else {
      createProduct(payload);
    }
    onClose();
  };


  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product ? "Edit Product" : "Add New Product"}
      size="lg"
      footer={
        <div className={cx("modal-product__actions")}>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" form="product-form" type="submit">
            Save Changes
          </Button>
        </div>
      }
    >
      <Form formState={formState} onSubmit={handleSubmit} />
    </Modal>
  );
};

export default ModalProduct;
