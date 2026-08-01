import FarmerSidebar from "./FarmerSideBar";
import Navbar from "./Navbar";

function FarmerLayout({ children }) {

    return (

        <div className="layout">

            <FarmerSidebar />

            <div className="main">

                <Navbar />

                <div className="content">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default FarmerLayout;