import { useState } from "react";
import API from "../services/api";

import { toast } from "react-toastify";
function Register() {

    const [form,setForm]=useState({
        full_name:"",
        username:"",
        email:"",
        password:"",
        role:"farmer"
    });

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{

            await API.post("/accounts/register/",form);

            toast.success("Login Successful");

            window.location.href="/";

        }
        catch(error){
            console.log(error.response?.data);
            toast.error("Invalid Credentials");
        }

    };

    return(

        <div className="auth-wrapper">

            <div className="auth-card">

                <h2 className="auth-title">
                    Farmer Registration
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Full Name</label>

                        <input
                            className="form-input"
                            name="full_name"
                            value={form.full_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>

                        <input
                            className="form-input"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">

                        <label>Role</label>

                        <select
                            className="form-input"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                        >
                            <option value="farmer">Farmer</option>
                            <option value="admin">Admin</option>
                        </select>

                    </div>

                    <button
                        className="btn btn-primary"
                    >
                        Register
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Register;