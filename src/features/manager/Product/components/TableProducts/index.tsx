import classNames from "classnames/bind";
import styles from "./TableProducts.module.scss";
import type { ProductListItem, ProductTableProps } from "../../types/product.interface";
import type { TableColumn } from "@/components/common/Table";
import Button from "@/components/common/Button";
import Table from "@/components/common/Table";

const cx = classNames.bind(styles);

const TableProducts = ({ data, onEdit, onDelete, onRowClick }: ProductTableProps) => {
    const columns: TableColumn<ProductListItem>[] = [
        {
            header: "SKU",
            key: "sku",
        },
        {
            header: "Name",
            key: "name",
        },
        {
            header: "Category",
            key: "categories",
            render: (record) => (
                <span>{record.categories?.map(c => c.name).join(', ')}</span>
            )
        },
        {
            header: "Action",
            key: "action",
            render: (record) => (
                <div className={cx("table__actions")}>
                    <Button
                        size="sm"
                        variant="outline"
                        color="secondary"
                        onClick={(e) => { e.stopPropagation(); onEdit && onEdit(record); }}
                    >
                        Sửa
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        color="destructive"
                        onClick={(e) => { e.stopPropagation(); onDelete && onDelete(record); }}
                    >
                        Xóa
                    </Button>
                </div>
            ),
        },
    ];
    const handleRowClick = (record: ProductListItem) => {
        onRowClick && onRowClick(record.id);
    };
    return (
        <Table<ProductListItem> columns={columns} data={data.length > 0 ? data : []} onRowClick={handleRowClick} />
    );
}
export default TableProducts;