import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        navigate("/");
    };

    return (

        <div className="navbar">

            <h2>AI Crop Disease Detection</h2>

            <div>

                Welcome <b>{username}</b> ({role})

                <button onClick={logout}>
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;