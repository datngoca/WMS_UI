import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/AdminLayout";

// Admin
import { DashboardPage } from "@/features/admin/Dashboard";
import { UserPage } from "@/features/admin/User";
import { RolePage } from "@/features/admin/Role";
import { WarehousePage } from "@/features/admin/Warehouse";

// User
import BreadCrumbs from "@/layouts/UserLayout/BreadCrumbs/BreadCrumbs";
import UserLayout from "@/layouts/UserLayout/UserLayout";
import { UserHomePage } from "@/features/user/Home";
import { UserCategoryPage } from "@/features/user/Category";
import { UserProductPage } from "@/features/user/Product";

// Product Manager
import { ProductManagerDashboardPage } from "@/features/manager/Dashboard";
import { ProductManagerProductsPage } from "@/features/manager/Product";
import { ProductManagerInventoryPage } from "@/features/manager/Inventory";
import { ProductManagerMasterDataPage } from "@/features/manager/MasterData";

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
      { id: "inventory", label: "Inventory", path: "/management/inventory" },
      { id: "master-data", label: "Master Data", path: "/management/master-data" },
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
        <Route path="/home" element={<UserHomePage />} />

        <Route element={<BreadCrumbs />} >
          <Route path="/catalog" element={<UserCategoryPage />} />
          <Route path="/catalog/:category" element={<UserCategoryPage />} />
          <Route path="/catalog/:category/:product" element={<UserProductPage />} />
        </Route>
      </Route>

      <Route element={<MainLayout sidebarMenu={SIDEBAR_MENU_PRODUCT_MANAGER} />}>
        <Route path="/management/dashboards" element={<ProductManagerDashboardPage />} />
        <Route path="/management/products" element={<ProductManagerProductsPage />} />
        <Route path="/management/inventory" element={<ProductManagerInventoryPage />} />
        <Route path="/management/master-data" element={<ProductManagerMasterDataPage />} />
      </Route>
    </Routes >
  );
};

export default AppRoutes;
