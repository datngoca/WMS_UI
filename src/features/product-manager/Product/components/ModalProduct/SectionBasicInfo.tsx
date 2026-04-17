import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import Input from "@/components/common/Input";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import CascadingCategorySelect from "@/features/product-manager/Category/components/CascadingCategorySelect";
import { useCategory } from "@/features/product-manager/Category/hooks/useCategory";
import { getParentOptions } from "@/utils/formatData";
import type { CategoryOption, Category } from "@/features/product-manager/Category/types/category.interface";

const cx = classNames.bind(styles);

interface SectionBasicInfoProps {
    formData: Product;
    handleFormChange: (field: keyof Product, value: any) => void;
}

const SectionBasicInfo = ({ formData, handleFormChange }: SectionBasicInfoProps) => {
    const { data: categories = [] } = useCategory();
    const [showCascading, setShowCascading] = useState(false);

    // 1. Cập nhật hàm handleSelectCategory
    const handleSelectCategory = (selectedCategory: CategoryOption) => {
        const currentCategories = formData.categories || [];

        // Rà soát xem category click vào đã có trong mảng chưa?
        const isSelected = currentCategories.some(c => c.id === selectedCategory.id);

        let newCategories;
        if (isSelected) {
            // Nếu đã có thì filter (xóa) nó ra
            newCategories = currentCategories.filter(c => c.id !== selectedCategory.id);
        } else {
            // Nếu chưa có thì Push thêm vào
            newCategories = [...currentCategories, { id: selectedCategory.id, name: selectedCategory.name } as Category];
        }

        handleFormChange("categories", newCategories);
        // Bỏ dòng setShowCascading(false) để List không tự động sập xuống
    };
    // 1. Trả về mảng thay vì dán String lại với nhau
    const getCategoryDisplayName = () => {
        if (formData.categories && formData.categories.length > 0) {
            return formData.categories.map((c) => c.name); // Trả về mảng (ví dụ: ["Áo", "Thời trang Nam"])
        }
        return [];
    };

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
                    <div className={cx("modal-product__card__content__item__cascading-wrapper")}>
                        <div onClick={() => setShowCascading(!showCascading)}>
                            <Input
                                type="select"        // Sửa type lại thành "select"
                                isMultiple={true}    // Bật Multi-select để render các cục Chip UI
                                value={getCategoryDisplayName()} // Input mảng danh sách tên Category
                                placeholder="Select product category"
                            />
                        </div>
                        {showCascading && (
                            <div className={cx("modal-product__card__content__item__cascading")}>
                                <CascadingCategorySelect
                                    categories={getParentOptions(categories, null)}
                                    onSelectCategory={handleSelectCategory}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionBasicInfo;