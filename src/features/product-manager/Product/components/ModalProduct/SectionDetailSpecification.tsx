import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types";
import Input from "@/components/Common/Input";
import { FaTrash } from "react-icons/fa";
import Button from "@/components/Common/Button";

const cx = classNames.bind(styles);

interface SectionDetailSpecificationProps {
    detailedSpecs: Product["detailedSpecs"];
    onChange: (detailedSpecs: Product["detailedSpecs"]) => void;
}

const SectionDetailSpecification = ({ detailedSpecs, onChange }: SectionDetailSpecificationProps) => {

    const handleAddGroup = () => {
        onChange([...detailedSpecs, { groupName: "", items: [{ label: "", value: "" }] }]);
    };

    const handleRemoveGroup = (index: number) => {
        onChange(detailedSpecs.filter((_, i) => i !== index));
    };

    const handleGroupNameChange = (groupIndex: number, value: string) => {
        const newSpecs = [...detailedSpecs];
        newSpecs[groupIndex] = { ...newSpecs[groupIndex], groupName: value };
        onChange(newSpecs);
    };

    const handleAddItem = (groupIndex: number) => {
        const newSpecs = [...detailedSpecs];
        newSpecs[groupIndex] = { 
            ...newSpecs[groupIndex], 
            items: [...newSpecs[groupIndex].items, { label: "", value: "" }] 
        };
        onChange(newSpecs);
    };

    const handleRemoveItem = (groupIndex: number, itemIndex: number) => {
        const newSpecs = [...detailedSpecs];
        newSpecs[groupIndex] = { 
            ...newSpecs[groupIndex], 
            items: newSpecs[groupIndex].items.filter((_, i) => i !== itemIndex) 
        };
        onChange(newSpecs);
    };

    const handleItemChange = (groupIndex: number, itemIndex: number, key: "label" | "value", value: string) => {
        const newSpecs = [...detailedSpecs];
        const newItems = [...newSpecs[groupIndex].items];
        newItems[itemIndex] = { ...newItems[itemIndex], [key]: value };
        newSpecs[groupIndex] = { ...newSpecs[groupIndex], items: newItems };
        onChange(newSpecs);
    };

    return (
        <div className={cx("modal-product__card")}>
            <div className={cx("modal-product__card__title")}>Detail Specification</div>
            {detailedSpecs.map((detailsSpec, index) => (
                <div key={index} className={cx("modal-product__card__group")}>
                    <div className={cx("modal-product__card__content", "modal-product__card__content--specs")}>
                        <Input type="text"
                            value={detailsSpec.groupName}
                            placeholder="Group name (e.g., Display, Performance)"
                            className={cx("modal-product__card__content__item", "modal-product__card__content__item--full-width")}
                            onChange={(value) => handleGroupNameChange(index, value as string)}
                        />
                        <Button variant="ghost" color="destructive" onClick={() => handleRemoveGroup(index)} >
                            <FaTrash />
                        </Button>
                    </div>

                    {detailsSpec.items.map((spec, specIndex) => (
                        <div key={specIndex} className={cx("modal-product__card__content", "modal-product__card__content--specs")}>
                            <Input type="text" placeholder="Label" value={spec.label} className={cx("modal-product__card__content__item")} onChange={(value) => handleItemChange(index, specIndex, "label", value as string)} />
                            <Input type="text" placeholder="Value" value={spec.value} className={cx("modal-product__card__content__item")} onChange={(value) => handleItemChange(index, specIndex, "value", value as string)} />
                            <Button variant="ghost" color="destructive" onClick={() => handleRemoveItem(index, specIndex)}>
                                <FaTrash />
                            </Button>
                        </div>
                    ))}
                    <Button variant="ghost" className={cx("modal-product__card__content__action")} onClick={() => handleAddItem(index)}>Add row</Button>
                </div>
            ))}
            <Button variant="ghost" className={cx("modal-product__card__action")} onClick={handleAddGroup}>Add Specification Group</Button>
        </div>
    );
};

export default SectionDetailSpecification;