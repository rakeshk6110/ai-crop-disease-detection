import { Link } from "react-router-dom";

function FarmerSidebar() {
    return (
        <div className="sidebar">
            <h2>🌱 Crop AI</h2>

            <Link to="/dashboard">Dashboard</Link>

            <Link to="/upload">Upload Crop</Link>

            <Link to="/history">Prediction History</Link>

            <Link to="/advisories">Crop Advisories</Link>

            <Link to="/queries">Farmer Queries</Link>
        </div>
    );
}

export default FarmerSidebar;