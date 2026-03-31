import classNames from "classnames/bind";
import styles from "./Profile.module.scss"
import iconManageAccount from "@/assets/img/icon_mange_account.svg";
import iconChangePassword from "@/assets/img/icon_change_password.svg";
import iconLogOut from "@/assets/img/icon_log_out.svg";
const cx = classNames.bind(styles);

interface ProfileProps {
    className?: string;
}

const Profile = ({ className }: ProfileProps) => {
    return (
        <div className={cx("profile", className)}>
            <div className={cx("profile__item")}>
                <img src={iconManageAccount} alt="Manage Account" className={cx("profile__item__icon")} />
                <span className={cx("profile__item__name")}>Manage Account</span>
            </div>
            <div className={cx("profile__item")}>
                <img src={iconChangePassword} alt="Change Password" className={cx("profile__item__icon")} />
                <span className={cx("profile__item__name")}>Change Password</span>
            </div>
            <div className={cx("profile__item")}>
                <img src={iconLogOut} alt="Logout" className={cx("profile__item__icon")} />
                <span className={cx("profile__item__name")}>Logout</span>
            </div>
        </div>
    );
};

export default Profile;