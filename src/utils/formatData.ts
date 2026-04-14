import type { Category, CategoryOption } from "@/features/product-manager/Category/types/category.interface";

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
    const formatter = Intl.NumberFormat('vi-VN', {
        notation: 'compact',
        compactDisplay: 'short',
    });
    return formatter.format(number);
};

// Ví dụ:
// 1500 -> 1,5 Tr (Tiếng Việt) hoặc 1.5M (Tiếng Anh)

/**
 * Chuyển đổi cấu trúc cây thành mảng phẳng cho Select Option
 * @param categories: Danh sách category dạng cây
 * @param currentId: ID của category đang được edit (để loại bỏ khỏi danh sách cha)
 * @param depth: Cấp độ hiện tại (dùng để tạo prefix thụt đầu dòng)
 * @param results: Mảng kết quả tích lũy qua các vòng đệ quy
 */
export const getParentOptions = (
    categories: Category[],
    currentId: number | null
): CategoryOption[] => {
    if (!categories) return [];

    return categories
        .filter(cat => cat.id !== currentId) // 1. Bỏ qua chính nó
        .map(cat => ({
            id: cat.id,
            name: cat.name,
            // 2. Đệ quy xuống các node con.
            // Vì nếu nó bị filter bỏ ở trên, toàn bộ con cháu của nó cũng sẽ tự động bị cắt đi.
            children: cat.children && cat.children.length > 0
                ? getParentOptions(cat.children, currentId)
                : [],
        }));
};