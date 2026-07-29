import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
    const token = localStorage.getItem("access");
    const role = localStorage.getItem("role");

    // User is not logged in
    if (!token) {
        return <Navigate to="/" replace />;
    }

    // Logged in but not an admin
    if (role !== "admin") {
        return <Navigate to="/dashboard" replace />;
    }

    // Admin can access
    return children;
}

export default AdminRoute;