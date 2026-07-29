import Navbar from "./Navbar";
import Sidebar from "./SideBar";

function Layout({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />

            <div style={{ flex: 1, marginLeft: "250px" }}>
                <Navbar />

                <div style={{ padding: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;