import type { TreeOption, Value } from "../../input.interface";

// Lấy tất cả các node con (trả về mảng object)
export const getAllChildNodes = (node: TreeOption): TreeOption[] => {
  let nodes: TreeOption[] = [node];
  if (node.children) {
    node.children.forEach((child) => {
      nodes = [...nodes, ...getAllChildNodes(child)];
    });
  }
  return nodes;
};

// 2. Logic xử lý khi Click vào một checkbox
export const handleCascadeChange = (
  currentNode: TreeOption,
  currentValues: Value[],
  isChecking: boolean,
): Value[] => {
  const familyNodes = getAllChildNodes(currentNode);
  if (isChecking) {
    // Hợp nhất mảng cũ và mảng dòng họ mới, lọc trùng dựa trên ID
    const combined = [...currentValues, ...familyNodes];
    return combined.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
    );
  } else {
    // Lọc bỏ những node nằm trong danh sách dòng họ
    const familyIds = familyNodes.map((n) => n.id);
    return currentValues.filter((item) => !familyIds.includes(item.id));
  }
};
