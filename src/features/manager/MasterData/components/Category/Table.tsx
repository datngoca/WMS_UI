import classNames from "classnames/bind";
import styles from "./Category.module.scss";
import type { TableColumn } from "@/components/common/Table";
import type { Category } from "@/features/manager/MasterData/components/Category/types/category.interface";
import Button from "@/components/common/Button";
import { useMemo, useState } from "react";
import Table from "@/components/common/Table";
import { FaAngleRight } from "react-icons/fa";
const cx = classNames.bind(styles);
interface TableProps {
    categories: Category[];
    onEdit: (category: Category) => void;
}

const TableCategory = ({ categories, onEdit }: TableProps) => {
    const [expandedIds, setExpandedIds] = useState<number[]>([1]); // Mở sẵn item có id 1

    const toggleExpand = (e: React.MouseEvent, id: number) => {
        e.stopPropagation();
        setExpandedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    // 2. Trải phẳng dữ liệu (Flatten data) để đưa vào Table
    const tableData = useMemo(() => {
        const flatList: Category[] = [];

        const flatten = (items: Category[]) => {
            items.forEach(category => {
                flatList.push(category);
                // Nếu đang mở và có children thì đệ quy xuống cấp tiếp theo
                if (expandedIds.includes(category.id) && category.children && category.children.length > 0) {
                    flatten(category.children);
                }
            });
        };

        flatten(categories);

        return flatList;
    }, [categories, expandedIds]);
    const columns: TableColumn<Category>[] = [
        {
            header: "Name",
            key: "name",
            render: (item) => (
                // Nếu là dòng con, thụt lề vào theo độ sâu (depth) từ API
                <div className={cx("table__item", { "table__item--expanded": expandedIds.includes(item.id) })} style={{ paddingLeft: `calc(1rem * ${item.depth || 0})` }}>

                    {/* Mũi tên đóng mở (chỉ hiện ở dòng có con) */}
                    {item.children && item.children.length > 0 && (
                        <div
                            onClick={(e) => toggleExpand(e, item.id)}
                        >
                            <FaAngleRight className={cx("table__icon", { "table__icon--expanded": expandedIds.includes(item.id) })} />
                        </div>
                    )}
                    {/* Tên và Slug */}
                    <div className={cx("table__name")}>
                        <span className={cx("table__name--title")}>{item.name}</span>
                        <span className={cx("table__name--slug")}>{item.slug}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Code",
            key: "code",
        },
        {
            header: "Description",
            key: "description",
        },
        {
            header: "Action",
            key: "action",
            render: (role: Category) => (
                <div className={cx("table__actions")}>
                    <Button
                        size="sm"
                        variant="outline"
                        color="secondary"
                        onClick={() => onEdit(role)}
                    >
                        Edit
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        color="destructive"
                        onClick={() => { }}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <Table columns={columns} data={tableData} />
    );
}
export default TableCategory;