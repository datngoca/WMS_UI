import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import DashBoardPage from "@/features/DashBoard/pages/DashBoardPage";
import UserPage from "@/features/User/pages/UserPage";
import RolePage from "@/features/Role/pages/RolePage";
import WarehousePage from "@/features/Warehouse/pages/WarehousePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace/>} />
      {/* 1. Những trang public */}
      <Route path="/login" />

      {/* 2. Những trang cần Đăng Nhập */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/role" element={<RolePage />} />
        <Route path="/warehouses" element={<WarehousePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
