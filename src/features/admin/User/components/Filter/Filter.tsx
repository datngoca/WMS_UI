import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { DatePicker, type DatePickerProps } from "antd";
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useState } from "react";
import Tag from "@/components/Common/Tag";
import { FaDeleteLeft } from "react-icons/fa6";

const cx = classNames.bind(styles);

const Filter = () => {
  const [filterSelected, setFilterSelected] = useState<Array<string>>([]);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Date");
  const onChange: DatePickerProps["onChange"] = (_date, dateString) => {
    setFilterSelected([...filterSelected, dateString as string]);
  };

  const handleResetFilter = () => {
    setSelectedDate("Date");
    setIsOpenDatePicker(false);
    setFilterSelected([]);
  };

  const handleRemoveFilter = (index: number) => {
    const newFilterSelected = [...filterSelected];
    newFilterSelected.splice(index, 1);
    setFilterSelected(newFilterSelected);
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
      <div className={cx("filter__selected")}>
        {filterSelected.length > 0 && (
          <>
            {filterSelected.map((date, index) => (
              <Tag
                key={index}
                text={date}
                color="green"
                icon={<FaDeleteLeft color="#FF5500" />}
                onIconClick={() => handleRemoveFilter(index)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
