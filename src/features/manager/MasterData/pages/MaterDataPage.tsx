import classNames from "classnames/bind";
import styles from "./MaterDataPage.module.scss";
import Header from "../components/Header";
import Unit from "../components/Unit";
import Category from "../components/Category";
import { useState } from "react";
import { useCategoryModal } from "../components/Category/hooks/useCategoryModal";
import { useUnitModal } from "../components/Unit/hooks/useUnitModal";

const cx = classNames.bind(styles);

const MaterDataPage = () => {
    const tabs = [
        {
            label: "Category Management",
            value: "category",
            action: "Add Category"
        },
        {
            label: "Unit Management",
            value: "unit",
            action: "Add Unit"
        }
    ];
    const [activeTab, setActiveTab] = useState<string>(tabs[0].value);
    const { handleAddCategory } = useCategoryModal();
    const { handleAddUnit } = useUnitModal();

    const handleAction = () => {
        if (activeTab === "category") {
            handleAddCategory();
        } else if (activeTab === "unit") {
            handleAddUnit();
        }
    };

    return (
        <div className={cx("wrap")}>
            <Header tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} onAction={handleAction} />
            <div className={cx("content")}>
                {activeTab === "category" && <Category />}
                {activeTab === "unit" && <Unit />}
            </div>
        </div>
    );
}
export default MaterDataPage;