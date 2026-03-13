import classNames from "classnames/bind";

import styles from "./Table.module.scss";

const cx = classNames.bind(styles);

export interface TableColumn<T> {
  header: string;
  key: keyof T | string;
  render?: (item: T) => React.ReactNode;
}
interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
}
const Table = <T extends { id: number}>({
  columns,
  data,
}: TableProps<T>) => {
  return (
    <div className={cx("table-container")}>
      <table className={cx("table")}>
        <thead className={cx("table__head")}>
          <tr className={cx("table__head__row")}>
            {columns.map((column, index) => (
              <th key={index} className={cx("table__header")}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={cx("table__body")}>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={cx("table__body__row")}>
              {columns.map((col, index) => (
                <td key={index} className={cx("table__data")}>
                  {col.render
                    ? col.render(item)
                    : (item[col.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
