import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import Modal from "@/components/common/Modal";
import Button from "@/components/common/Button";
import Form from "./Form";
import { useProductMutations } from "../../hooks/useProductMutations";

const cx = classNames.bind(styles);

interface ModalProductProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product;
}

const EMPTY_PRODUCT: Product = {
  id: 0,
  name: "",
  sku: "",
  categories: [],
  originalPrice: 0,
  basePrice: 0,
  description: "",
  specs: [{ label: "", value: "" }],
  detailedSpecs: [{ groupName: "", items: [{ label: "", value: "" }] }],
  productUnits: [],
  options: [],
};

const ModalProduct = ({ isOpen, onClose, product }: ModalProductProps) => {
  const { createProduct, updateProduct } = useProductMutations();
  const formState: Product = product
    ? {
      ...product,
      specs: product.specs?.length > 0 ? product.specs : [{ label: "", value: "" }],
      detailedSpecs: product.detailedSpecs?.length > 0 ? product.detailedSpecs : [{ groupName: "", items: [{ label: "", value: "" }] }],
    }
    : EMPTY_PRODUCT;

  const handleSubmit = (data: Product) => {
    if (!product) {
      createProduct(data);
    } else {
      updateProduct(data);
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
