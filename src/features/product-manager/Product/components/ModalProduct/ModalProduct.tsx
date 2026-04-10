import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types";
import Modal from "@/components/Common/Modal";
import { useState } from "react";
import TiptapEditor from "../TiptapEditor";
import SectionBasicInfo from "./SectionBasicInfo";
import SectionBasicSpecifications from "./SectionBasicSpecifications";
import SectionDetailSpecification from "./SectionDetailSpecification";

const cx = classNames.bind(styles);

interface ModalProductProps {
    isOpen: boolean;
    onClose: () => void;
    product?: Product;
}

const ENTRY_FORM: Product = {
    id: 0,
    name: "",
    sku: "",
    category: "",
    originalPrice: 0,
    basePrice: 0,
    description: "",
    specs: [{ label: "", value: "" }],
    detailedSpecs: [
        { groupName: "", items: [{ label: "", value: "" }] }
    ],
    options: [],
};

const ModalProduct = ({ isOpen, onClose, product }: ModalProductProps) => {
    const [formData, setFormData] = useState<Product>(() => {
        if (!product) return ENTRY_FORM;
        return {
            ...product,
            specs: product.specs?.length > 0 ? product.specs : [{ label: "", value: "" }],
            detailedSpecs: product.detailedSpecs?.length > 0 ? product.detailedSpecs : [{ groupName: "", items: [{ label: "", value: "" }] }]
        };
    });

    const handleFormChange = (
        field: keyof Product,
        value: any,
    ) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Product Details" size="lg">
            <div className={cx("modal-product")}>
                {/* ------------------- Basic Information -------------------- */}
                <SectionBasicInfo formData={formData} handleFormChange={handleFormChange} />
                {/* ------------------- Description -------------------- */}
                <div className={cx("modal-product__card")}>
                    <div className={cx("modal-product__card__title")}>Description</div>
                    <div className={cx("modal-product__card__content__item", "modal-product__card__content__item--full-width")}>
                        <TiptapEditor value={formData.description} onChange={(value) => handleFormChange("description", value)} />
                    </div>
                </div>
                {/* ------------------- Basic Specifications -------------------- */}
                <SectionBasicSpecifications
                    specs={formData.specs}
                    onChange={(specs) => handleFormChange("specs", specs)}
                />
                {/* ------------------- Detail Specifications -------------------- */}
                <SectionDetailSpecification
                    detailedSpecs={formData.detailedSpecs}
                    onChange={(detailedSpecs) => handleFormChange("detailedSpecs", detailedSpecs)}
                />
            </div>
        </Modal>
    );
};

export default ModalProduct;
