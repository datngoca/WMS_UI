import classNames from "classnames/bind";
import styles from "./ModalProduct.module.scss";
import type { Product } from "../../types/product.interface";
import { useFieldArray, type Control } from "react-hook-form";
import FormInput from "@/utils/FormInput";

import { useUnits } from "@/features/manager/MasterData";
import type { Unit } from "@/features/manager/MasterData";
import Button from "@/components/common/Button";
import { FaPlus, FaTrash } from "react-icons/fa";

const cx = classNames.bind(styles);

interface SectionUnitAndPriceProps {
    control: Control<Product>;
}

const SectionUnitAndPrice = ({ control }: SectionUnitAndPriceProps) => {
    const { data } = useUnits();
    const units = data?.map((unit) => ({
        id: unit.id,
        label: unit.name,
    }));
    const { fields, append, remove } = useFieldArray({
        control,
        name: "productUnits",
    });

    const handleAddProductUnit = () => {
        append({
            unit: null,
            exchangeValue: 1,
            price: 0,
            isBaseUnit: fields.length === 0,
        });
    };

    const handleRemoveProductUnit = (index: number) => {
        remove(index);
    };
    return (
        <div className={cx("modal-product__card")}>
            <div className={cx("modal-product__card__title")}>Unit and Price</div>

            <div className={cx("modal-product__card__content")}>
                {fields.map((field, index) => {
                    const isBaseUnit = index === 0; // Dòng đầu tiên luôn là Đơn vị cơ bản
                    return (
                        <div className={cx("modal-product__card__group", "modal-product__card__content__item--full-width", "modal-product__card__content")} key={field.id}>
                            <FormInput<Product>
                                type="select"
                                name={`productUnits.${index}.unit`}
                                control={control}
                                label={isBaseUnit ? "Base Unit (Đơn vị gốc)" : "Conversion Unit (Đơn vị quy đổi)"}
                                options={units ?? []}
                                transformToInput={(value: Unit | null) => {
                                    if (!value) return null;
                                    return {
                                        id: value.id,
                                        label: value.name,
                                    };
                                }}
                                transformToForm={(option: { id: number, label: string }) => {
                                    // Tìm lại nguyên object Unit từ data gốc
                                    return data?.find(u => u.id === option.id) || null;
                                }}
                                placeholder="Select unit"
                                className={cx("modal-product__card__content__item", "modal-product__card__content__item--full-width")}
                                required
                            />
                            <FormInput<Product>
                                name={`productUnits.${index}.exchangeValue`}
                                control={control}
                                type="number"
                                label="Exchange Value"
                                placeholder="Ex: 10"
                                disabled={isBaseUnit} // Khóa dòng đầu tiên, luôn bằng 1
                                required
                            />
                            <FormInput<Product>
                                name={`productUnits.${index}.price`}
                                control={control}
                                type="number"
                                label="Price"
                                placeholder="Ex: 10000"
                                required
                            />
                            <div style={{ paddingTop: "28px" }}>
                                {!isBaseUnit && (
                                    <Button
                                        type="button"
                                        color="destructive"
                                        variant="ghost"
                                        leftIcon={<FaTrash />}
                                        onClick={() => handleRemoveProductUnit(index)}

                                    >
                                        Delete
                                    </Button>
                                )}
                            </div>
                        </div>
                    );
                })}


            </div>
            <Button
                type="button"
                color="primary"
                variant="ghost"
                leftIcon={<FaPlus />}
                onClick={handleAddProductUnit}

            >
                Add Unit
            </Button>

        </div>
    );
};




export default SectionUnitAndPrice;