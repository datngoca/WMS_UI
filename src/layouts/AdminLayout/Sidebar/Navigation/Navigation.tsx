import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

interface NavigationProps {
  label: string;
  className?: string;
  toLink?:string
}

const Navigation = ({ label, className, toLink="/" }: NavigationProps) => {
  return (
    <NavLink to={toLink} className={cx("nav")}>
    <li className={cx("nav__item" )}>
      <span className={cx("nav__details", className)}>
        {label}
      </span>
    </li>
    </NavLink>

  );
};
export default Navigation;
