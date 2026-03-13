import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

interface CardProps {
  title: string;
  value: string;
  image: string;
  subtitle?: string;
}
const Card = ({ title, value, image, subtitle }: CardProps) => {
  return (
    <div className={cx("card")}>
      <div className={cx("main-info")}>
        <div className={cx("card-info")}>
        <p className={cx("card-title")}>{title}</p>
        <h2 className={cx("card-value")}>{value}</h2>
      </div>
      <img src={image} alt="icon" className={cx("card-icon")}/>
      </div>
      <span className={cx("subtitle")}>{subtitle}</span>
    </div>
  );
};
export default Card;
