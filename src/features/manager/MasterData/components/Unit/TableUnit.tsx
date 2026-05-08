import classNames from "classnames/bind";
import styles from "./Unit.module.scss";
import Table from "@/components/common/Table";
import type { TableColumn } from "@/components/common/Table";
import type { Unit } from "./types/unit.interface";
import Button from "@/components/common/Button";

const cx = classNames.bind(styles);

interface TableUnitProps {
    units: Unit[];
    onEdit: (unit: Unit) => void;
    onDelete: (id: number) => void;
}

const TableUnit = ({ units, onEdit, onDelete }: TableUnitProps) => {
    const columns: TableColumn<Unit>[] = [
        {
            header: "Code",
            key: "code",
        },
        {
            header: "Name",
            key: "name",
        },
        {
            header: "Description",
            key: "description",
        },
        {
            header: "Action",
            key: "action",
            render: (unit: Unit) => (
                <div className={cx("table__actions")}>
                    <Button
                        size="sm"
                        variant="outline"
                        color="secondary"
                        onClick={() => onEdit(unit)}
                    >
                        Edit
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        color="destructive"
                        onClick={() => onDelete(unit.id)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <Table columns={columns} data={units || []} />
    );
}
export default TableUnit;