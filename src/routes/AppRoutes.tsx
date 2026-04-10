import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/AdminLayout";

// Admin
import { DashboardPage } from "@/features/admin/Dashboard";
import { UserPage } from "@/features/admin/User";
import { RolePage } from "@/features/admin/Role";
import { WarehousePage } from "@/features/admin/Warehouse";

// User
import UserLayout from "@/layouts/UserLayout/UserLayout";
import { HomePage } from "@/features/user/Home";
import { CategoryPage as UserCategoryPage } from "@/features/user/Category";
import BreadCrumbs from "@/layouts/UserLayout/BreadCrumbs/BreadCrumbs";
import { ProductPage } from "@/features/user/Product";

// Product Manager
import { DashboardPage as ProductManagerDashboardPage } from "@/features/product-manager/Dashboard";
import { ProductsPage as ProductManagerProductsPage } from "@/features/product-manager/Product";
import { InventoryPage as ProductManagerInventoryPage } from "@/features/product-manager/Inventory";
import { CategoryPage as ProductManagerCategoryPage } from "@/features/product-manager/Category";

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
        <Route path="/admin/dashboards" element={<DashboardPage />} />
        <Route path="/admin/users" element={<UserPage />} />
        <Route path="/admin/roles" element={<RolePage />} />
        <Route path="/admin/warehouses" element={<WarehousePage />} />
      </Route>

      <Route element={<UserLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route element={<BreadCrumbs />} >
          <Route path="/catalog/:category" element={<UserCategoryPage />} />
          <Route path="/catalog/:category/:product" element={<ProductPage />} />
        </Route>
      </Route>

      <Route element={<MainLayout sidebarMenu={SIDEBAR_MENU_PRODUCT_MANAGER} />}>
        <Route path="/management/dashboards" element={<ProductManagerDashboardPage />} />
        <Route path="/management/products" element={<ProductManagerProductsPage />} />
        <Route path="/management/category" element={<ProductManagerCategoryPage />} />
        <Route path="/management/inventory" element={<ProductManagerInventoryPage />} />
      </Route>
    </Routes >
  );
};

export default AppRoutes;
