import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/AdminLayout";

import DashBoardPage from "@/features/admin/DashBoard/pages/DashBoardPage";
import UserPage from "@/features/admin/User/pages/UserPage";
import RolePage from "@/features/admin/Role/pages/RolePage";
import WarehousePage from "@/features/admin/Warehouse/pages/WarehousePage";
import UserLayout from "@/layouts/UserLayout/UserLayout";
import HomePage from "@/features/user/Home/pages/HomePage";
import ProductsPage from "@/features/user/Category/pages/CategoryPage";
import BreadCrumbs from "@/layouts/UserLayout/BreadCrumbs/BreadCrumbs";
import ProductPage from "@/features/user/Product/pages/ProductPage";

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

      <Route element={<UserLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route element={<BreadCrumbs />} >
          <Route path="/catalog/:category" element={<ProductsPage />} />
          <Route path="/catalog/:category/:product" element={<ProductPage />} />
        </Route>
      </Route>
    </Routes >
  );
};

export default AppRoutes;
