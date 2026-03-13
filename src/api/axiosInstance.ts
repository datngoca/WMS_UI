import axios from "axios";

// Định nghĩa lại Interface cho Axios để khớp với việc Interceptor trả về response.data
declare module "axios" {
  export interface AxiosInstance {
    get<T = unknown, R = T, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;
    post<T = unknown, R = T, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;
    put<T = unknown, R = T, D = unknown>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;
    delete<T = unknown, R = T, D = unknown>(
      url: string,
      config?: AxiosRequestConfig<D>,
    ): Promise<R>;
  }
}

// 1. Khởi tạo instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10000, // Đợi quá 10 giây thì huỷ
  headers: {
    "Content-Type": "application/json",
  },
});

// 2. Request Interceptor (Gắn token)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Lấy token từ kho lưu trữ
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 3. Response Interceptor (Xử lý lỗi tập trung)
axiosInstance.interceptors.response.use(
  (response) => response.data, // Trả thẳng data để bên ngoài dùng cho gọn
  (error) => {
   const message = error.response?.data?.message || "Có lỗi xảy ra!";
    // Gọi addToast ở đây
    window.dispatchEvent(new CustomEvent("show-toast", { detail: { message, type: "error" } }));
    return Promise.reject(error);
  },
);

export default axiosInstance;
