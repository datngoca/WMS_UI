import classNames from "classnames/bind";
import styles from "./RangeSlider.module.scss"

const cx = classNames.bind(styles);

interface RangeSliderProps {
    min: number;
    max: number;
    step?: number;
    value: [number, number];
    onChange: (minVal: number, maxVal: number) => void;
}

const RangeSlider = ({ min, max, step, value, onChange }: RangeSliderProps) => {
    const minVal = value[0];
    const maxVal = value[1];

    const safeMinVal = Math.max(min, Math.min(minVal, max));
    const safeMaxVal = Math.max(min, Math.min(maxVal, max));

    const minPos = ((safeMinVal - min) / (max - min)) * 100;
    const maxPos = ((safeMaxVal - min) / (max - min)) * 100;

    // Tính toán step tự động nếu không truyền, để tránh giật lag khi range quá lớn (chia khoảng làm 100 phần)
    const computedStep = step || Math.max(1, Math.floor((max - min) / 100));

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Math.min(Number(e.target.value), maxVal - computedStep);
        onChange(val, maxVal);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Math.max(Number(e.target.value), minVal + computedStep);
        onChange(minVal, val);
    };

    return (
        <div className={cx("range-slider")} style={{ "--min": `${minPos}%`, "--max": `${maxPos}%` } as React.CSSProperties}>
            <div className={cx("range-slider__track")}></div>
            <input
                type="range"
                min={min}
                max={max}
                step={computedStep}
                value={safeMinVal}
                id="slider-1"
                className={cx("range-slider__input", "range-slider__input--left")}
                onChange={handleMinChange}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={computedStep}
                value={safeMaxVal}
                id="slider-2"
                className={cx("range-slider__input", "range-slider__input--right")}
                onChange={handleMaxChange}
            />

        </div>
    );
};

export default RangeSlider;