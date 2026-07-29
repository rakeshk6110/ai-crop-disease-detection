import { Link } from "react-router-dom";

function AdminDashboard() {
    return (
        <div className="dashboard">

            <h1>Admin Dashboard</h1>

            <div className="dashboard-grid">

                <Link to="/admin/advisories" className="card">
                    Manage Advisories
                </Link>

                <Link to="/admin/queries" className="card">
                    Farmer Queries
                </Link>

                <Link to="/admin/analytics" className="card">
                    Analytics
                </Link>

            </div>

        </div>
    );
}

export default AdminDashboard;