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