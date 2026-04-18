import type { Category } from "@/features/product-manager/Category/types/category.interface";

/**
 * @param object Đối tượng dữ liệu gốc (formData)
 * @param keys Mảng các trường muốn xóa bỏ
 */
export const omitData = <T extends object, K extends keyof T>(
  object: T,
  keys: K[],
): Omit<T, K> => {
  // Tạo bản sao để tránh mutate dữ liệu gốc
  const result = { ...object };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};

/**
 * Rút gọn số tiền lớn (K, M, B hoặc Nghìn, Triệu, Tỷ)
 */
export const formatCompactNumber = (number: number) => {
  const formatter = Intl.NumberFormat("vi-VN", {
    notation: "compact",
    compactDisplay: "short",
  });
  return formatter.format(number);
};

// Ví dụ:
// 1500 -> 1,5 Tr (Tiếng Việt) hoặc 1.5M (Tiếng Anh)

/**
 * Hàm lọc cây dữ liệu dùng chung (Generic Tree Filter)
 * Dùng để lọc bỏ một node và tất cả con cháu của nó khỏi cây.
 */
export const filterTree = <T extends { children?: T[] }>(
  data: T[],
  filterFn: (item: T) => boolean,
): T[] => {
  if (!data) return [];

  return data.filter(filterFn).map((item) => ({
    ...item,
    children:
      item.children && item.children.length > 0
        ? filterTree(item.children, filterFn)
        : [],
  }));
};

/**
 * Hàm map cây dữ liệu dùng chung (Generic Tree Map)
 * Dùng để biến đổi các field trong cây (ví dụ đổi id -> value, name -> label)
 */
export const mapToTreeOption = <
  T extends { children?: T[] },
  R extends { children?: R[] },
>(
  data: T[],
  mapFn: (item: T) => Omit<R, "children">,
): R[] => {
  if (!data) return [];

  return data.map((item) => {
    const mappedItem = mapFn(item);
    return {
      ...mappedItem,
      children: (item.children && item.children.length > 0
        ? mapToTreeOption(item.children, mapFn)
        : []) as R[],
    } as R;
  });
};

/**
 * Chuyển đổi cấu trúc cây thành danh sách tùy chọn cho Parent Select
 * @param categories: Danh sách category dạng cây
 * @param currentId: ID của category đang được edit (để loại bỏ khỏi danh sách cha tiềm năng)
 */
export const getParentOptions = (
  categories: Category[],
  currentId: number | null,
): any[] => {
  const filtered = filterTree(categories, (cat) => cat.id !== currentId);

  return mapToTreeOption(filtered, (cat) => ({
    id: cat.id,
    label: cat.name,
  }));
};
