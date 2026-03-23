import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/AdminLayout";

import DashBoardPage from "@/features/DashBoard/pages/DashBoardPage";
import UserPage from "@/features/User/pages/UserPage";
import RolePage from "@/features/Role/pages/RolePage";
import WarehousePage from "@/features/Warehouse/pages/WarehousePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      {/* 1. Những trang public */}
      <Route path="/login" />

      {/* 2. Những trang cần Đăng Nhập */}
      <Route element={<MainLayout />}>
        <Route path="/dashboards" element={<DashBoardPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/roles" element={<RolePage />} />
        <Route path="/warehouses" element={<WarehousePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
