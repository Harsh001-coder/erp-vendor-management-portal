import { BrowserRouter, Routes, Route } from "react-router-dom";

import VendorManagement from "../pages/admin/VendorManagement";
import Products from "../pages/admin/Products";
import PurchaseOrders from "../pages/admin/PurchaseOrders";
import Invoices from "../pages/admin/Invoices";
import Payments from "../pages/admin/Payments";


import VendorDashboard from "../pages/vendor/VendorDashboard";
import VendorSignup from "../pages/vendor/VendorSignup";
import VendorPO from "../pages/vendor/VendorPO";
import VendorInvoices from "../pages/vendor/VendorInvoices";
import Shipment from "../pages/vendor/Shipment";
import VendorPayments from "../pages/vendor/VendorPayments";

import DashboardLayout from "../layouts/DashboardLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";

import Login from "../pages/Login";

import VendorApproval from "../Pages/admin/VendorApproval"

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <DashboardLayout>
              <AdminDashboard />
            </DashboardLayout>
          }
        />

        <Route
  path="/admin/vendors"
  element={
    <DashboardLayout>
      <VendorManagement />
    </DashboardLayout>
  }
/>

<Route
  path="/admin/products"
  element={
    <DashboardLayout>
      <Products />
    </DashboardLayout>
  }
/>

<Route
  path="/admin/orders"
  element={
    <DashboardLayout>
      <PurchaseOrders />
    </DashboardLayout>
  }
/>

<Route
  path="/admin/invoices"
  element={
    <DashboardLayout>
      <Invoices />
    </DashboardLayout>
  }
/>

<Route
  path="/admin/payments"
  element={
    <DashboardLayout>
      <Payments />
    </DashboardLayout>
  }
/>


<Route
  path="/vendor/dashboard"
  element={
    <DashboardLayout>
      <VendorDashboard />
    </DashboardLayout>
  }
/>

<Route
  path="/vendor/signup"
  element={
    <DashboardLayout>
      <VendorSignup />
    </DashboardLayout>
  }
/>

<Route
  path="/vendor/po"
  element={
    <DashboardLayout>
      <VendorPO />
    </DashboardLayout>
  }
/>

<Route
  path="/vendor/invoices"
  element={
    <DashboardLayout>
      <VendorInvoices />
    </DashboardLayout>
  }
/>

<Route
  path="/vendor/shipment"
  element={
    <DashboardLayout>
      <Shipment />
    </DashboardLayout>
  }
/>

<Route
  path="/vendor/payments"
  element={
    <DashboardLayout>
      <VendorPayments />
    </DashboardLayout>
  }
/>

<Route
  path="/admin/vendor-approval"
  element={
    <DashboardLayout>
      <VendorApproval />
    </DashboardLayout>
  }
/>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;