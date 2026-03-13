import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { DatePicker, type DatePickerProps } from "antd";
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useState } from "react";
const cx = classNames.bind(styles);

const Filter = () => {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Date");
  const onChange: DatePickerProps["onChange"] = (_date, dateString) => {
    setSelectedDate(dateString as string);
  };

  const handleResetFilter = () => {
    setSelectedDate("Date");
    setIsOpenDatePicker(false);
  };
  return (
    <div className={cx("filter")}>
      <div className={cx("filter__group")}>
        {/* Item: Icon */}
        <div className={cx("filter__item")}>
          <FaFilter className={cx("filter__icon")} />
        </div>
        {/* Item: Label */}
        <div className={cx("filter__item", "filter__item--label")}>
          Filter By
        </div>
        {/* Item: Date Picker */}
        <div
          onClick={() => {
            setIsOpenDatePicker(!isOpenDatePicker);
          }}
          className={cx("filter__item", "filter__item--clickable", {
            "filter__item--active": isOpenDatePicker,
          })}
        >
          <span>{selectedDate}</span>
          <FaAngleDown className={cx("filter__item__icon")} />
          <div className={cx("filter__date-wrapper")}>
            <DatePicker
              open={isOpenDatePicker}
              onOpenChange={setIsOpenDatePicker}
              onChange={onChange}
              className={cx("filter__date-input")}
            />
          </div>
        </div>

        {/* Item: Reset */}
        <div
          className={cx(
            "filter__item",
            "filter__item--clickable",
            "filter__item--reset",
          )}
          onClick={handleResetFilter}
        >
          Reset Filter
          <FaArrowRotateLeft className={cx("filter__item__icon")} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
