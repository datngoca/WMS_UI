import classNames from "classnames/bind";
import styles from "./Filter.module.scss";
import { FaAngleDown } from "react-icons/fa";
import Input from "@/components/Common/Input";
import { useState } from "react";
import RangeSlider from "./RangeSlider";
import { formatCompactNumber } from "@/utils/helperMoneny";
const cx = classNames.bind(styles);

const Filter = () => {
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
    const handlePriceRangeChange = (minVal: number, maxVal: number) => {
        setPriceRange([minVal, maxVal]);
    };
    return (
        <div className={cx("filter")}>
            <div className={cx("filter__item")}>
                <h3 className={cx("filter__item__dropdown")}>
                    Price
                    <FaAngleDown className={cx("filter__item__dropdown__icon")} />
                </h3>
                <div className={cx("filter__price__container")}>
                    <div className={cx("filter__price__container__min")}>
                        <label htmlFor="min" className={cx("filter__price__container__min__label")}>From</label>
                        <Input
                            type="text"
                            className={cx("filter__price__container__min__input")}
                            value={formatCompactNumber(priceRange[0])}
                            onChange={(val) => handlePriceRangeChange(Number(val), priceRange[1])}
                        />
                    </div>
                    <div className={cx("filter__price__container__max")}>
                        <label htmlFor="max" className={cx("filter__price__container__max__label")}>To</label>
                        <Input
                            type="text"
                            className={cx("filter__price__container__max__input")}
                            value={formatCompactNumber(priceRange[1])}
                            onChange={(val) => handlePriceRangeChange(priceRange[0], Number(val))}
                        />
                    </div>

                </div>
                <RangeSlider min={0} max={100000000} step={1000000} value={priceRange} onChange={handlePriceRangeChange} />

            </div>
            <div className={cx("filter__item")}>
                <h3 className={cx("filter__item__dropdown")}>
                    Brand
                    <FaAngleDown className={cx("filter__item__dropdown__icon")} />
                </h3>
                <div className={cx("filter__brand__container")}>
                    <div className={cx("filter__brand__container__item")}>
                        <input type="checkbox" id="brand1" name="brand1" value="brand1" className={cx("filter__brand__container__item__input")} />
                        <label htmlFor="brand1" className={cx("filter__brand__container__item__label")}>Brand 1</label>
                    </div>
                    <div className={cx("filter__brand__container__item")}>
                        <input type="checkbox" id="brand2" name="brand2" value="brand2" className={cx("filter__brand__container__item__input")} />
                        <label htmlFor="brand2" className={cx("filter__brand__container__item__label")}>Brand 2</label>
                    </div>
                    <div className={cx("filter__brand__container__item")}>
                        <input type="checkbox" id="brand3" name="brand3" value="brand3" className={cx("filter__brand__container__item__input")} />
                        <label htmlFor="brand3" className={cx("filter__brand__container__item__label")}>Brand 3</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;