import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import { FaSearch, FaBell, FaAngleDown } from "react-icons/fa";

import flagEn from "@/assets/img/flag-en.png";
import avatar from "@/assets/img/avatar.png";
const cx = classNames.bind(styles);

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cx("header", className)}>
      <div className={cx("header__search")}>
        <FaSearch className={cx("header__search-icon")} />
        <input
          type="search"
          placeholder="Search"
          className={cx("header__search-input")}
        />
      </div>
      <div className={cx("header__actions")}>
        <span className={cx("header__notification")}>
          <FaBell className={cx("header__notification-icon")} />
          <span className={cx("header__notification-badge")}>3</span>
        </span>
        <span className={cx("header__language")}>
          <img src={flagEn} alt="English" className={cx("header__language-flag")} />
          <span className={cx("header__language-name")}>English</span>
          <FaAngleDown className={cx("header__dropdown-icon")} />
        </span>
        <span className={cx("header__profile")}>
          <img src={avatar} alt="John Doe" className={cx("header__avatar")} />
          <div className={cx("header__infor")}>
            <span className={cx("header__user-name")}>John Doe</span>
            <span className={cx("header__user-role")}>Admin</span>
          </div>
          <FaAngleDown className={cx("header__dropdown-icon")} />
        </span>
      </div>
    </header>
  );
};
export default Header;
