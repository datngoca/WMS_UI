import TableUnit from "./TableUnit";
import { useUnits } from "./hooks/useUnit";
import { useUnitModal } from "./hooks/useUnitModal";
import ModalUnit from "./ModalUnit";


const Unit = () => {
    const { data: units } = useUnits();
    const { handleEditUnit, isModalOpen, handleCloseModal, selectedUnit } = useUnitModal();
    return (
        <div>
            <TableUnit units={units || []} onEdit={handleEditUnit} onDelete={() => { }} />
            <ModalUnit isOpen={isModalOpen} onClose={handleCloseModal} selectedUnit={selectedUnit} />
        </div>
    );
}

export default Unit;