import classNames from "classnames/bind";
import styles from "./CategoryPage.module.scss";
import Button from "@/components/Common/Button";
import TableCategory from "../components/TableCategory";

const cx = classNames.bind(styles);

const CategoryPage = () => {
    return (
        <div className={cx("category")}>
            <h1 className={cx("category__title")}>Category</h1>
            <div className={cx("category__features")}>
                <Button size="md" className={cx("category__button")}>
                    Add new Category
                </Button>
            </div>
            <div className={cx("category__table")}>
                <TableCategory data={[]} />
            </div>

        </div>
    );
}
export default CategoryPage;