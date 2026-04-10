import classNames from "classnames/bind";
import styles from "./CategoryPage.module.scss";

const cx = classNames.bind(styles);

const CategoryPage = () => {
    return (
        <div className={cx("category")}>
            <h1>Category</h1>
        </div>
    );
}
export default CategoryPage;