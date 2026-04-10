import classNames from "classnames/bind";
import styles from "./TableCategory.module.scss";
import Button from "@/components/Common/Button";
import Table from "@/components/Common/Table";
import type { Category, CategoryTableProps } from "../../types/category.interface";
const cx = classNames.bind(styles);

const TableCategory = ({ data }: CategoryTableProps) => {
    const columns = [
        {
            title: "Tên danh mục",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Hành động",
            key: "action",
            render: (record: Category) => (
                <div className={cx("action")}>
                    <Button size="sm" variant="outline" color="secondary" onClick={() => { }}>Sửa</Button>
                </div>
            ),
        },
    ];
    return (
        <div className={cx("table")}>
            <Table<Category> columns={columns} data={data} />
        </div>
    );
}
export default TableCategory;