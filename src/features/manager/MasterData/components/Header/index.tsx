import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "@/components/common/Button";
import { FaPlus } from "react-icons/fa";

const cx = classNames.bind(styles);

interface HeaderProps {
    tabs: Array<{
        label: string;
        value: string;
        action: string;
    }>;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    onAction?: () => void;
}

const Header = ({ activeTab, setActiveTab, tabs, onAction }: HeaderProps) => {
    return (
        <div className={cx("header")}>
            <div className={cx("header__left")}>
                {tabs.map((tab) => (
                    <div
                        key={tab.value}
                        className={cx("header__left__tab", activeTab === tab.value && "active")}
                        onClick={() => setActiveTab(tab.value)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className={cx("header__right")}>
                <Button
                    leftIcon={<FaPlus />}
                    size="sm"
                    color="primary"
                    onClick={onAction}
                >
                    {tabs.find((tab) => tab.value === activeTab)?.action}
                </Button>
            </div>
        </div>
    );
}
export default Header;