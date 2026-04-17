import classNames from "classnames/bind";
import styles from "../../Input.module.scss";
import { useState } from "react";
import Dropdown from "../../Shared/Dropdown";
import TreeList from "./TreeList";
import type { Option, TreeFieldProps } from "../../input.interface";
import Tag from "../../Shared/Tag";
import { FaAngleDown } from "react-icons/fa6";

const cx = classNames.bind(styles);

const TreeField = (props: TreeFieldProps) => {
    const { placeholder, options = [], multiple, value } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cx("tree-field", "field")} onClick={() => setIsOpen(!isOpen)}>
            <div className={cx(`tree-field__${value ? "value" : "placeholder"}`)}>
                {multiple ? (
                    value.map((item: Option) => (
                        <Tag key={item.id} tag={item.label} />
                    ))
                ) : (
                    value ? value : placeholder
                )}
            </div>
            <FaAngleDown />
            <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <TreeList options={options} multiple={multiple} />
            </Dropdown>

        </div>
    )
}
export default TreeField;