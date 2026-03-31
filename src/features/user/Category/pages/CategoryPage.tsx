import classNames from "classnames/bind";
import styles from "./CategoryPage.module.scss";
import Filter from "../components/Filter";
import Products from "../components/Products";

const cx = classNames.bind(styles);

const CategoryPage = () => {
    return (
        <div className={cx("category-page")}>
            <div className={cx("category-page__filter")}>
                <Filter />
            </div>
            <div className={cx("category-page__products")}>
                <Products />
            </div>
        </div>
    );
};

export default CategoryPage;