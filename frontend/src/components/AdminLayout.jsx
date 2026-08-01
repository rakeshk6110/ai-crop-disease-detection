import AdminSidebar from "./AdminSideBar";
import Navbar from "./Navbar";

function AdminLayout({ children }) {

    return (

        <div className="layout">

            <AdminSidebar />

            <div className="main">

                <Navbar />

                <div className="content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default AdminLayout;