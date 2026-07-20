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
        <div style={{padding:"50px",maxWidth:"500px",backgroundColor:"green"}} >
            <h1>Farmer Login</h1>
            <form onSubmit={handlelogin}>
                <input type="text"
                       placeholder="Username"
                       value={username}
                       onChange={(e)=>setUsername(e.target.value)}
                       required />
                <br />
                <input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                       required />
                <br />
                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login