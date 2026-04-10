import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types";
import Input from "@/components/Common/Input";

const cx = classNames.bind(styles);

interface SectionBasicInfoProps {
    formData: Product;
    handleFormChange: (field: keyof Product, value: string | number) => void;
}

const SectionBasicInfo = ({ formData, handleFormChange }: SectionBasicInfoProps) => {
    return (
        <div className={cx("modal-product__card")}>
            <div className={cx("modal-product__card__title")}>Basic Information</div>
            <div className={cx("modal-product__card__content")}>
                <div className={cx("modal-product__card__content__item")}>
                    <label htmlFor="">SKU</label>
                    <Input
                        type="text"
                        value={formData.sku}
                        placeholder="Enter product SKU"
                        onChange={(value) => handleFormChange("sku", value as string)}
                    />
                </div>
                <div className={cx("modal-product__card__content__item")}>
                    <label htmlFor="">Product Name</label>
                    <Input
                        type="text"
                        value={formData.name}
                        placeholder="Enter product name"
                        onChange={(value) => handleFormChange("name", value as string)}
                    />
                </div>

                <div className={cx("modal-product__card__content__item")}>
                    <label htmlFor="">Base Price</label>
                    <Input
                        type="number"
                        value={formData.basePrice}
                        placeholder="Enter base price"
                        onChange={(value) => handleFormChange("basePrice", value as number)}
                    />
                </div>
                <div className={cx("modal-product__card__content__item")}>
                    <label htmlFor="">Original Price</label>
                    <Input
                        type="number"
                        value={formData.originalPrice}
                        placeholder="Enter original price"
                        onChange={(value) => handleFormChange("originalPrice", value as number)}
                    />
                </div>
                <div className={cx("modal-product__card__content__item", "modal-product__card__content__item--full-width")}>
                    <label htmlFor="">Category</label>
                    <Input
                        type="select"
                        value={formData.category}
                        placeholder="Enter product category"
                        onChange={(value) => handleFormChange("category", value as string)}
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionBasicInfo;