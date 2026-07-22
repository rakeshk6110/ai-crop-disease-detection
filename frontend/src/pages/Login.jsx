import { useState } from "react";
import API from "../services/api";

function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handlelogin = async (e)=>{
        e.preventDefault()
         console.log("Username:", username);
         console.log("Password:", password);
        try{
            const response = await API.post("/token/",{
                username:username,
                password:password,
            })
            localStorage.setItem("access",response.data.access)
            localStorage.setItem("refresh",response.data.refresh)
            alert("login successfully")
            window.location.href="/upload"
        }
        catch(error){
            alert("Invalid credentials")
            console.log(error)
        }
    }
    return(
    <div className="auth-wrapper">
        <div className="auth-card">

            <h1 className="auth-title">🌿 Farmer Login</h1>
            <p className="auth-subtitle">
                AI-Based Crop Disease Detection System
            </p>

            <form onSubmit={handlelogin}>

                <div className="form-group">
                    <label className="form-label">Username</label>

                    <input
                        type="text"
                        className="form-input"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>

                    <input
                        type="password"
                        className="form-input"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>

            </form>
        </div>
    </div>
)
}
export default Login