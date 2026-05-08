import className from "classnames/bind";
import styles from "../../Input.module.scss";
import type { TreeOption, Value } from "../../input.interface";
import { useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { handleCascadeChange } from "./useTreeLogic";

const cx = className.bind(styles);

interface TreeNodeProps {
  node: TreeOption;
  onChange?: (value: any) => void;
  cascade?: boolean;
  value?: Value | Value[];
  multiple?: boolean;
}

const TreeNode = ({
  node,
  onChange,
  cascade,
  value,
  multiple,
}: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const hasChildren = node.children && node.children.length > 0;

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();

    const selectedValue: Value = {
      id: node.id,
      label: node.label,
    };

    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const isChecking = !currentValues.some(
        (item: Value) => item.id === node.id,
      );
      let nextValues: Value[];

      if (cascade) {
        nextValues = handleCascadeChange(node, currentValues, isChecking);
      } else {
        nextValues = isChecking
          ? [...currentValues, selectedValue]
          : currentValues.filter((item: Value) => item.id !== node.id);
      }
      onChange?.(nextValues);
    } else {
      onChange?.(selectedValue);
    }
  };

  const isChecked = multiple
    ? Array.isArray(value) && value.some((v) => v.id === node.id)
    : !Array.isArray(value) && value?.id === node.id;
  return (
    <div
      className={cx("tree-node", {
        "tree-node--active": isExpanded,
      })}
      onClick={handleSelect}
    >
      <div className={cx("tree-node__item")}>
        <div className={cx("tree-node__item__content")}>
          {hasChildren ? (
            <FaChevronRight
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className={cx("tree-node__item__content__prefix", {
                "tree-node__item__content__prefix--expanded": isExpanded,
              })}
            />
          ) : null}
          <div className={cx("tree-node__item__content__label")}>
            {node.label}
          </div>
        </div>
        <div
          className={cx("tree-node__item__suffix", {
            "tree-node__item__suffix--checked": isChecked,
          })}
        >
          <FaCheck />
        </div>
      </div>
      {hasChildren && isExpanded && (
        <div className={cx("tree-node__children")}>
          {node.children.map((child: TreeOption) => (
            <TreeNode
              key={child.id}
              node={child}
              onChange={onChange}
              value={value}
              cascade={cascade}
              multiple={multiple}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
