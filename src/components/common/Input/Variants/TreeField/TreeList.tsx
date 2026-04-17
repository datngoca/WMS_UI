import className from "classnames/bind"
import styles from "../../Input.module.scss";
import type { TreeOption } from "../../input.interface";
import { useState } from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa";

const cx = className.bind(styles);

interface TreeListProps {
    options: TreeOption[];
    multiple?: boolean;
    cascade?: boolean;
    checked?: boolean;
}

const TreeItem = ({ node, multiple, cascade, checked }: { node: TreeOption, multiple?: boolean, cascade?: boolean, checked?: boolean }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const hasChildren = node.children && node.children.length > 0;

    return (
        <>
            <div className={cx("tree-list__item")} onClick={() => setIsExpanded(!isExpanded)}>
                <div className={cx("tree-list__item__content")} >
                    <div className={cx("tree-list__item__content__prefix", {
                        "tree-list__item__content__prefix--expanded": isExpanded
                    })}>
                        {hasChildren ? <FaChevronRight /> : null}
                    </div>
                    <div className={cx("tree-list__item__content__label")}>
                        {node.label}
                    </div>
                    <div className={cx("tree-list__item__content__suffix", {
                        "tree-list__item__content__suffix--checked": checked
                    })}>
                        <FaCheck />
                    </div>

                </div>
            </div>
            {hasChildren && isExpanded && (
                <div className={cx("tree-list__item__children")}>
                    <TreeList options={node.children} multiple={multiple} cascade={cascade} />
                </div>
            )}
        </>
    );
}

const TreeList = ({ options, multiple, cascade, checked }: TreeListProps) => {
    return (
        <div className={cx("tree-list")}>
            {options?.map((node: TreeOption) => (
               <TreeItem key={node.id} node={node} multiple={multiple} cascade={cascade} checked={checked} />
            ))}
        </div>
    )
}

export default TreeList;