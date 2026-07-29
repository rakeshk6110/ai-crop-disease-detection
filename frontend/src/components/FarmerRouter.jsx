import { Navigate } from "react-router-dom";

function FarmerRoute({ children }) {
    const token = localStorage.getItem("access");
    const role = localStorage.getItem("role");

    
    if (!token) {
        return <Navigate to="/" replace />;
    }

    if (role !== "farmer") {
        return <Navigate to="/admin" replace />;
    }

    return children;
}

export default FarmerRoute;