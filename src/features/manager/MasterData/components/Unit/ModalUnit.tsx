import classNames from "classnames/bind";
import styles from "./Unit.module.scss";
import Modal from "@/components/common/Modal";
import type { Unit, UnitRequest } from "./types/unit.interface";
import FormInput from "@/utils/FormInput";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import { useUnitMutation } from "./hooks/useUnitMutations";

const cx = classNames.bind(styles);

interface ModalUnitProps {
    isOpen: boolean;
    onClose: () => void;
    selectedUnit: Unit | null;
}

const ModalUnit = ({ isOpen, onClose, selectedUnit }: ModalUnitProps) => {
    const { updateUnit, createUnit } = useUnitMutation();

    const defaultValues: UnitRequest = {
        name: selectedUnit?.name || "",
        code: selectedUnit?.code || "",
        description: selectedUnit?.description || "",
    }

    const { control, handleSubmit } = useForm<UnitRequest>({
        values: defaultValues,
    });



    const handleOnSubmit = (data: UnitRequest) => {
        if (selectedUnit) {
            updateUnit({ id: selectedUnit.id, payload: data });
        } else {
            createUnit(data);
        }
        onClose();
    }
    return (
        <Modal
            title={selectedUnit ? "Edit Unit" : "Add Unit"}
            isOpen={isOpen}
            onClose={onClose}
        >
            <form onSubmit={handleSubmit(handleOnSubmit)} >
                <FormInput type="text" control={control} name="name" label="Name" required placeholder="Name" />
                <FormInput type="text" control={control} name="code" label="Code" required placeholder="Code" />
                <FormInput type="text" control={control} name="description" label="Description" placeholder="Description" />
                <div className={cx("modal-footer")}>
                    <Button type="button" color="secondary" onClick={onClose}>Cancel</Button>
                    <Button type="submit" color="primary">Save</Button>
                </div>
            </form>
        </Modal>
    );
}
export default ModalUnit;