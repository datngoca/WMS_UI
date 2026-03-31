# WMS-UI

WMS-UI là giao diện frontend cho hệ thống Warehouse Management System (WMS). Dự án được xây dựng bằng React, TypeScript và Vite, hướng tới việc cung cấp một nền tảng quản trị kho vận hiện đại, dễ mở rộng và thuận tiện cho đội ngũ phát triển tiếp tục bổ sung tính năng.

Hiện tại, codebase đã có sẵn các khối chức năng quản trị cốt lõi như quản lý người dùng, vai trò, kho hàng, cùng với một khu vực giao diện riêng cho phía người dùng. Cấu trúc dự án được tổ chức theo hướng feature-first để tách biệt rõ từng miền nghiệp vụ, giúp việc bảo trì và mở rộng dễ dàng hơn khi quy mô hệ thống tăng lên.

## Mục tiêu dự án

Dự án này được xây dựng nhằm:

- Cung cấp giao diện quản trị cho các thực thể chính trong hệ thống kho vận.
- Tách riêng không gian quản trị nội bộ và giao diện phía người dùng.
- Chuẩn hóa cách tổ chức frontend theo module để thuận tiện phát triển theo nhóm.
- Thiết lập nền tảng sẵn sàng để mở rộng thêm các nghiệp vụ WMS như tồn kho, nhập kho, xuất kho, đơn hàng và vận hành kho.

## Phạm vi chức năng hiện có

Dựa trên cấu trúc hiện tại của dự án, ứng dụng đang bao gồm các phần chính sau:

### Khu vực quản trị

- Trang tổng quan Dashboard.
- Quản lý người dùng với các thao tác danh sách, thêm, sửa, xóa.
- Quản lý vai trò với các thao tác danh sách, thêm, sửa, xóa.
- Quản lý kho hàng với các thao tác danh sách, thêm, sửa, xóa.
- Sidebar điều hướng giữa các phân hệ quản trị.
- Header quản trị và bố cục trang riêng cho admin.

### Khu vực người dùng

- Layout riêng cho giao diện người dùng.
- Trang Home mang tính giới thiệu và trưng bày sản phẩm.
- Header và Footer riêng cho trải nghiệm phía người dùng.

### Hạ tầng frontend dùng chung

- Tầng gọi API tập trung bằng Axios.
- Quản lý dữ liệu bất đồng bộ bằng TanStack React Query.
- Cơ chế toast thông báo dùng chung thông qua Context.
- Bộ component tái sử dụng như `Button`, `Input`, `Modal`, `Table`, `Tag`, `Toast`.

## Công nghệ sử dụng

Dự án hiện đang sử dụng các công nghệ chính sau:

- `React 19`
- `TypeScript 5`
- `Vite 7`
- `React Router DOM 7`
- `@tanstack/react-query`
- `Axios`
- `Ant Design`
- `Sass / SCSS Modules`
- `React Icons`

## Kiến trúc dự án

Codebase được tổ chức theo hướng module hóa theo tính năng. Mỗi feature thường bao gồm các phần như `pages`, `components`, `hooks`, `services`, `types`. Cách tổ chức này giúp nhóm phát triển dễ xác định vị trí xử lý logic, giao diện và kiểu dữ liệu cho từng nghiệp vụ cụ thể.

```text
src/
|-- api/                 Cấu hình Axios, interceptor và request dùng chung
|-- assets/              Ảnh, icon, SCSS global, biến và mixin
|-- components/          Các UI component tái sử dụng trong toàn ứng dụng
|-- contexts/            Context dùng chung, hiện có hệ thống toast
|-- features/
|   |-- admin/
|   |   |-- DashBoard/   Màn hình tổng quan quản trị
|   |   |-- User/        Quản lý người dùng
|   |   |-- Role/        Quản lý vai trò
|   |   |-- Warehouse/   Quản lý kho hàng
|   |-- auth/            Nền tảng cho xác thực
|   |-- user/            Giao diện phía người dùng
|-- hooks/               Custom hook dùng chung
|-- layouts/             AdminLayout và UserLayout
|-- routes/              Khai báo route toàn ứng dụng
|-- type/                Kiểu dữ liệu dùng chung
|-- utils/               Hàm tiện ích
```

## Cách ứng dụng vận hành

Luồng khởi tạo hiện tại của ứng dụng như sau:

1. `src/main.tsx` khởi tạo `QueryClient` và cấu hình React Query.
2. `src/App.tsx` bọc ứng dụng bằng `BrowserRouter` và `ToastProvider`.
3. `src/routes/AppRoutes.tsx` định nghĩa routing cho toàn bộ ứng dụng.
4. Các route được tách theo 2 layout chính:
   - `AdminLayout`: dùng cho các trang quản trị.
   - `UserLayout`: dùng cho giao diện người dùng.
5. `src/api/axiosInstance.ts` cấu hình `baseURL`, tự động gắn token từ `localStorage` và xử lý lỗi response theo cách tập trung.

## Cấu trúc route hiện tại

Các route đang được khai báo trong hệ thống gồm:

- `/dashboards`: trang Dashboard quản trị
- `/users`: quản lý người dùng
- `/roles`: quản lý vai trò
- `/warehouses`: quản lý kho hàng
- `/home`: trang người dùng
- `/login`: đã có placeholder route, nhưng chưa thấy triển khai hoàn chỉnh giao diện và luồng xác thực

Lưu ý: route mặc định `/` hiện đang điều hướng sang `/dashboard`, trong khi route admin hiện có là `/dashboards`. Đây là một điểm cần rà soát lại để tránh sai khác giữa điều hướng và khai báo route thực tế.

## Tầng dữ liệu và kết nối API

Dự án đang dùng Axios làm HTTP client và React Query để quản lý dữ liệu bất đồng bộ.

Một số điểm đáng chú ý:

- `axiosInstance` được cấu hình dùng chung cho toàn ứng dụng.
- `Authorization` token được lấy từ `localStorage`.
- Lỗi API được phát ra dưới dạng sự kiện để hiển thị toast tập trung.
- Một số service hiện đã có sẵn cho các module:
  - `userService`
  - `roleService`
  - `warehouseService`

Hiện tại `baseURL` API đang được hard-code là `http://localhost:8080/api` trong `src/api/axiosInstance.ts`. Nếu triển khai nhiều môi trường như local, staging, production thì nên chuyển giá trị này sang biến môi trường.

## Yêu cầu môi trường

Để chạy dự án, cần chuẩn bị:

- Node.js 18 trở lên
- npm
- Backend API khả dụng tại `http://localhost:8080/api` hoặc cập nhật lại cấu hình tương ứng

## Cài đặt và chạy dự án

Cài dependency:

```bash
npm install
```

Chạy môi trường development:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Preview bản build production:

```bash
npm run preview
```

## Danh sách script

- `npm run dev`: chạy development server bằng Vite
- `npm run build`: biên dịch TypeScript và build production
- `npm run lint`: chạy ESLint để kiểm tra code
- `npm run preview`: chạy thử bản build production tại môi trường local

## Điểm mạnh hiện tại của codebase

- Cấu trúc thư mục rõ ràng, chia theo feature.
- Có sẵn hệ thống component dùng chung để tái sử dụng.
- Đã áp dụng React Query để tách logic dữ liệu khỏi phần hiển thị.
- Các module quản trị cốt lõi đã được dựng nền khá rõ.
- Có thể tiếp tục mở rộng theo từng phân hệ mà không cần thay đổi toàn bộ cấu trúc dự án.

## Những điểm nên ưu tiên hoàn thiện tiếp

Từ trạng thái code hiện tại, đây là các hạng mục nên được ưu tiên trong các vòng phát triển tiếp theo:

- Hoàn thiện luồng đăng nhập và phân quyền truy cập route.
- Chuyển cấu hình API sang file `.env`.
- Bổ sung tài liệu mô tả contract giữa frontend và backend.
- Chuẩn hóa route để tránh lệch giữa đường dẫn điều hướng và route thực tế.
- Bổ sung test cho các hook, service và các luồng giao diện quan trọng.
- Mở rộng thêm các phân hệ đặc thù của WMS như inventory, inbound, outbound, order processing.

## Ghi chú dành cho đội ngũ phát triển

Repository này đã được GitNexus index, vì vậy có thể dùng GitNexus để:

- Đọc nhanh cấu trúc dự án và các cụm chức năng.
- Tìm symbol liên quan khi cần hiểu một module.
- Phân tích phạm vi ảnh hưởng trước khi chỉnh sửa code.
- Kiểm tra tác động của thay đổi trước khi commit.

Điều này đặc biệt hữu ích khi dự án mở rộng thêm nhiều module và có nhiều thành viên cùng tham gia phát triển.

## Định hướng README trong tương lai

Nếu dự án tiếp tục phát triển, README có thể được bổ sung thêm các phần sau để phục vụ onboarding tốt hơn:

- Ảnh chụp giao diện các màn hình chính.
- Hướng dẫn cấu hình biến môi trường.
- Tài liệu phân quyền người dùng.
- Sơ đồ kiến trúc frontend-backend.
- Quy trình làm việc cho team như convention branch, commit, review và release.
