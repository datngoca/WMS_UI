import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/AdminLayout";

// Admin
import DashBoardPage from "@/features/admin/DashBoard/pages/DashBoardPage";
import UserPage from "@/features/admin/User/pages/UserPage";
import RolePage from "@/features/admin/Role/pages/RolePage";
import WarehousePage from "@/features/admin/Warehouse/pages/WarehousePage";

// User
import UserLayout from "@/layouts/UserLayout/UserLayout";
import HomePage from "@/features/user/Home/pages/HomePage";
import ProductsPage from "@/features/user/Category/pages/CategoryPage";
import BreadCrumbs from "@/layouts/UserLayout/BreadCrumbs/BreadCrumbs";
import ProductPage from "@/features/user/Product/pages/ProductPage";

// Operator
import OperatorDashBoardPage from "@/features/operator/Dashboard/pages/DashboardPage";
import OperatorProductsPage from "@/features/operator/Product/pages/ProductsPage";
import OperatorInventoryPage from "@/features/operator/Inventory/page/InventoryPage";

const SIDEBAR_MENU_ADMIN = [
  {
    groupName: "Hệ thống",
    items: [
      { id: "dashboard", label: "DashBoard", path: "/admin/dashboards" },
      { id: "users", label: "Users", path: "/admin/users" },
      { id: "roles", label: "Roles", path: "/admin/roles" },
      { id: "warehouses", label: "Warehouses", path: "/admin/warehouses" },
    ],
  },
  {
    groupName: "Settings",
    items: [
      { id: "settings", label: "Settings", path: "/products" },
      { id: "logout", label: "Logout", path: "/inventory" },
    ],
  },
];

const SIDEBAR_MENU_OPERATOR = [
  {
    groupName: "Hệ thống",
    items: [
      { id: "dashboard", label: "DashBoard", path: "/operator/dashboards" },
      { id: "products", label: "Products", path: "/operator/products" },
      { id: "inventory", label: "Inventory", path: "/operator/inventory" },
    ],
  },
  {
    groupName: "Settings",
    items: [
      { id: "settings", label: "Settings", path: "/operator/settings" },
      { id: "logout", label: "Logout", path: "/operator/logouts" },
    ],
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      {/* 1. Những trang public */}
      <Route path="/login" />

      {/* 2. Những trang cần Đăng Nhập */}
      <Route element={<MainLayout sidebarMenu={SIDEBAR_MENU_ADMIN} />}>
        <Route path="/admin/dashboards" element={<DashBoardPage />} />
        <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/roles" element={<RolePage />} />
        <Route path="/admin/warehouses" element={<WarehousePage />} />
      </Route>

      <Route element={<UserLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route element={<BreadCrumbs />} >
          <Route path="/catalog/:category" element={<ProductsPage />} />
          <Route path="/catalog/:category/:product" element={<ProductPage />} />
        </Route>
      </Route>

      <Route element={<MainLayout sidebarMenu={SIDEBAR_MENU_OPERATOR} />}>
        <Route path="/operator/dashboards" element={<OperatorDashBoardPage />} />
        <Route path="/operator/products" element={<OperatorProductsPage />} />
        <Route path="/operator/inventory" element={<OperatorInventoryPage />} />
      </Route>
    </Routes >
  );
};

export default AppRoutes;
