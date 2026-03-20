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
