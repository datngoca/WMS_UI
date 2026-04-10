import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types";
import Input from "@/components/Common/Input";
import Button from "@/components/Common/Button";
import { Fragment } from "react";
import { FaTrash } from "react-icons/fa";

const cx = classNames.bind(styles);

interface SectionBasicSpecificationsProps {
    specs: Product["specs"];
    onChange: (specs: Product["specs"]) => void;
}

const SectionBasicSpecifications = ({ specs, onChange }: SectionBasicSpecificationsProps) => {

    const handleSpecChange = (index: number, key: keyof Product["specs"][number], newValue: string) => {
        const newSpecs = [...specs];
        newSpecs[index] = { ...newSpecs[index], [key]: newValue };
        onChange(newSpecs);
    };

    const handleAddSpec = () => {
        onChange([...specs, { label: "", value: "" }]);
    };

    const handleRemoveSpec = (index: number) => {
        onChange(specs.filter((_, i) => i !== index));
    };

    return (
        <div className={cx("modal-product__card")}>
            <div className={cx("modal-product__card__title")}>Basic Specifications</div>

            <div className={cx("modal-product__card__content", "modal-product__card__content--specs")}>
                {specs.map((spec, index) => (
                    <Fragment key={index}>
                        <Input type="text"
                            value={spec.label}
                            placeholder="Enter specification label"
                            onChange={(value) => handleSpecChange(index, "label", value as string)} />
                        <Input
                            type="text"
                            value={spec.value}
                            placeholder="Enter specification value"
                            onChange={(value) => handleSpecChange(index, "value", value as string)}
                        />
                        <Button variant="ghost" color="destructive" onClick={() => handleRemoveSpec(index)} >
                            <FaTrash />
                        </Button>
                    </Fragment>
                ))}
            </div>

            <Button variant="outline" onClick={handleAddSpec} className={cx("modal-product__card__action")}>Add Specification</Button>
        </div>
    );
};

export default SectionBasicSpecifications;
