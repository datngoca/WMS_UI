import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Navigation from "./Navigation";
import logoLight from "@/assets/img/logo-light.svg";
import { useLocation } from "react-router-dom";
const cx = classNames.bind(styles);

interface SidebarProps {
  className?: string;
  sidebarMenu?: any[];
}

const Sidebar = ({ className, sidebarMenu }: SidebarProps) => {
  const location = useLocation(); // Lấy thông tin URL hiện tại
  const currentPath = location.pathname;
  return (
    <aside className={cx("sidebar", className)}>
      <div className={cx("sidebar__logo")}>
        <img src={logoLight} alt="App Logo" />
      </div>
      <nav className={cx("sidebar__nav")}>
        {sidebarMenu?.map((group) => (
          <ul key={group.groupName} className={cx("sidebar__group")}>
            {group.items.map((item: any) => {
              // Kiểm tra nếu đường dẫn của item trùng với đường dẫn hiện tại
              const isActive = currentPath === item.path;
              return (
                <Navigation
                  key={item.id}
                  label={item.label}
                  toLink={item.path}
                  className={cx({ "nav__item--active": isActive })}
                />
              );
            })}
          </ul>
        ))}
      </nav>
    </aside>
  );
};
export default Sidebar;
