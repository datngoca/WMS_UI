import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import { FaSearch, FaBell, FaAngleDown, FaCheck } from "react-icons/fa";

import flagEn from "@/assets/img/flag-en.png";
import avatar from "@/assets/img/avatar.png";


import { useState } from "react";
import DropDown from "@/components/Common/DropDown";
import Notification from "@/components/Notification";
import Language from "@/components/Language";
import Profile from "@/components/Profile";

const cx = classNames.bind(styles);

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);
  const [showNotificationDropDown, setShowNotificationDropDown] = useState(false);
  const handleLanguageDropDown = () => {
    setShowLanguageDropDown(!showLanguageDropDown);
  };

  const handleProfileDropDown = () => {
    setShowProfileDropDown(!showProfileDropDown);
  }

  const handleNotificationDropDown = () => {
    setShowNotificationDropDown(!showNotificationDropDown);
  }
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
        <div className={cx("header__notification")}>
          <FaBell className={cx("header__notification-icon")} onClick={handleNotificationDropDown} />
          <span className={cx("header__notification-badge")}>3</span>
          {showNotificationDropDown && (
            <div className={cx("header__dropdown")}>
              <DropDown size="md" header="Notifications" content={
                <>
                  <Notification title="Setting" description="2 hours ago" />
                  <Notification title="Notification" description="2 hours ago" />
                  <Notification title="Notification" description="2 hours ago" />
                </>
              } />
            </div>
          )}
        </div>
        <div className={cx("header__language")}>
          <img src={flagEn} alt="English" className={cx("header__language-flag")} />
          <span className={cx("header__language-name")}>English</span>
          <div className={cx("header__dropdown-icon")} onClick={handleLanguageDropDown}>
            <FaAngleDown />
          </div>
          {showLanguageDropDown && (
            <div className={cx("header__dropdown")}>
              <DropDown size="md" header="Language" content={
                <>
                  <Language />
                  <Language />
                </>
              } />
            </div>
          )}
        </div>
        <div className={cx("header__profile")}>
          <img src={avatar} alt="John Doe" className={cx("header__avatar")} />
          <div className={cx("header__infor")}>
            <span className={cx("header__user-name")}>John Doe</span>
            <span className={cx("header__user-role")}>Admin</span>
          </div>
          <div className={cx("header__dropdown-icon")} onClick={handleProfileDropDown}>
            <FaAngleDown />
          </div>
          {showProfileDropDown && (
            <div className={cx("header__dropdown")}>
              <DropDown size="md" content={
                <Profile />
              } />
            </div>
          )}
        </div>
      </div>

    </header>
  );
};
export default Header;
