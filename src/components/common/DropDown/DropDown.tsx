import classNames from "classnames/bind";
import styles from "./DropDown.module.scss";

const cx = classNames.bind(styles);

interface DropDownProps {
    size?: 'sm' | 'md' | 'lg',
    header?: string,
    footer?: string,
    content?: React.ReactNode,
}

const DropDown = ({ size, header, footer, content }: DropDownProps) => {
    return (
        <div className={cx('dropdown', `dropdown--${size}`)}>
            {header && <div className={cx('dropdown__header')}>
                {header}
            </div>}

            <div className={cx('dropdown__content')}>
                {content}
            </div>

            {footer && <div className={cx('dropdown__footer')}>
                {footer}
            </div>}
        </div>
    )
}

export default DropDown;