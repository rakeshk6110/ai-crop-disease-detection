import { Link } from "react-router-dom";

function Sidebar() {

    const role = localStorage.getItem("role");

    return (

        <div className="sidebar">

            <h2>🌿 Crop AI</h2>

            {role === "admin" ? (

                <>

                    <Link to="/admin">Dashboard</Link>

                    <Link to="/admin/advisories">
                        Manage Advisories
                    </Link>

                    <Link to="/admin/queries">
                        Farmer Queries
                    </Link>

                </>

            ) : (

                <>

                    <Link to="/dashboard">
                        Dashboard
                    </Link>

                    <Link to="/upload">
                        Upload Crop
                    </Link>

                    <Link to="/history">
                        Prediction History
                    </Link>

                    <Link to="/advisories">
                        Crop Advisories
                    </Link>

                    <Link to="/queries">
                        Farmer Queries
                    </Link>

                </>

            )}

        </div>

    );

}

export default Sidebar;