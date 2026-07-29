import { BrowserRouter, Routes, Route } from "react-router-dom";

import UploadPage from "./pages/UploadPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HistoryPage from "./pages/HistoryPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAdvisories from "./pages/AdminAdvisories";
import AdminQueries from "./pages/AdminQueries";
import CropAdvisories from "./pages/CropAdvisories";
import FarmerQueries from "./pages/FarmerQueries";
import FarmerRoute from "./components/FarmerRouter";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./components/AdminLayout";
import FarmerLayout from "./components/FarmerLayout";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <AdminRoute>
                <AdminLayout>
                  <Analytics />
                </AdminLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/queries"
            element={
              <AdminRoute>
                <AdminLayout>
                  <AdminQueries />
                </AdminLayout>
              </AdminRoute>
            }
          />
          <Route
            path="/admin/advisories"
            element={
              <AdminRoute>
                <AdminLayout>
                  <AdminAdvisories />
                </AdminLayout>
              </AdminRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/advisories"
            element={
              <FarmerRoute>
                <FarmerLayout>
                  <CropAdvisories />
                </FarmerLayout>
              </FarmerRoute>
            }
          />

          <Route
            path="/queries"
            element={
              <FarmerRoute>
                <FarmerLayout>
                  <FarmerQueries />
                </FarmerLayout>
              </FarmerRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <FarmerRoute>
                <FarmerLayout>
                  <UploadPage />
                </FarmerLayout>
              </FarmerRoute>
            }
          />
          <Route
            path="/history"
            element={
              <FarmerRoute>
                <FarmerLayout>
                  <HistoryPage />
                </FarmerLayout>
              </FarmerRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <FarmerRoute>
                <FarmerLayout>
                  <Dashboard />
                </FarmerLayout>
              </FarmerRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
