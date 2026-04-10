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

// Product Manager
import ProductManagerDashBoardPage from "@/features/product-manager/Dashboard/pages/DashboardPage";
import ProductManagerProductsPage from "@/features/product-manager/Product/pages/ProductsPage";
import ProductManagerInventoryPage from "@/features/product-manager/Inventory/page/InventoryPage";
import ProductManagerCategoryPage from "@/features/product-manager/Category/pages/CategoryPage";

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

const SIDEBAR_MENU_PRODUCT_MANAGER = [
  {
    groupName: "Hệ thống",
    items: [
      { id: "dashboard", label: "DashBoard", path: "/management/dashboards" },
      { id: "products", label: "Products", path: "/management/products" },
      { id: "category", label: "Category", path: "/management/category" },
      { id: "unit", label: "Unit", path: "/management/unit" },
      { id: "inventory", label: "Inventory", path: "/management/inventory" },
    ],
  },
  {
    groupName: "Settings",
    items: [
      { id: "settings", label: "Settings", path: "/management/settings" },
      { id: "logout", label: "Logout", path: "/management/logouts" },
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

      <Route element={<MainLayout sidebarMenu={SIDEBAR_MENU_PRODUCT_MANAGER} />}>
        <Route path="/management/dashboards" element={<ProductManagerDashBoardPage />} />
        <Route path="/management/products" element={<ProductManagerProductsPage />} />
        <Route path="/management/category" element={<ProductManagerCategoryPage />} />
        <Route path="/management/inventory" element={<ProductManagerInventoryPage />} />
      </Route>
    </Routes >
  );
};

export default AppRoutes;
