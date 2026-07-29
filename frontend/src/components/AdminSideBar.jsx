import { Link } from "react-router-dom";
import {
    FaTachometerAlt,
    FaChartBar,
    FaBullhorn,
    FaQuestionCircle,
    FaSignOutAlt
} from "react-icons/fa";

function AdminSidebar() {

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div className="sidebar">

            <h2>🛠 Admin Panel</h2>

            <Link to="/admin">
                <FaTachometerAlt /> Dashboard
            </Link>

            <Link to="/admin/analytics">
                <FaChartBar /> Analytics
            </Link>

            <Link to="/admin/advisories">
                <FaBullhorn /> Manage Advisories
            </Link>

            <Link to="/admin/queries">
                <FaQuestionCircle /> Farmer Queries
            </Link>

            <button className="logout-btn" onClick={logout}>
                <FaSignOutAlt /> Logout
            </button>

        </div>
    );
}

export default AdminSidebar;