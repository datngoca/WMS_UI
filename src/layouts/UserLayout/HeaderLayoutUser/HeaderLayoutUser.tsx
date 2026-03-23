import classNames from "classnames/bind";
import styles from "./HeaderLayoutUser.module.scss";

import logoBranch from "@/assets/img/logo_branch_dark.svg";
import {
  IoCartOutline,
  IoHeartCircleOutline,
  IoPersonOutline,
} from "react-icons/io5";
const cx = classNames.bind(styles);

const HeaderLayoutUser = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("header__container")}>
        <div className={cx("header__container__left-section")}>
          <img
            src={logoBranch}
            alt="Logo"
            className={cx("header__container__left-section__logo")}
          />

          <input
            type="text"
            placeholder="Search"
            className={cx("header__container__left-section__search")}
          />
        </div>
        <div className={cx("header__container__nav")}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className={cx("header__container__actions")}>
          <div className="header__container__actions__favorites">
            <IoHeartCircleOutline />
          </div>
          <div className="header__container__actions__cart">
            <IoCartOutline />
          </div>
          <div className="header__container__actions__user">
            <IoPersonOutline />
          </div>
        </div>
      </div>
      <div className={cx("header__subnav")}>
        <div className={cx("header__subnav__item")}>
          <a href="#">Phone</a>
        </div>
        <div className={cx("header__subnav__item")}>
          <a href="#">Computers</a>
        </div>
        <div className={cx("header__subnav__item")}>
          <a href="#">Smart Watches</a>
        </div>
        <div className={cx("header__subnav__item")}>
          <a href="#">Cameras</a>
        </div>
        <div className={cx("header__subnav__item")}>
          <a href="#">Headphones</a>
        </div>
        <div className={cx("header__subnav__item")}>
          <a href="#">Gaming</a>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayoutUser;
