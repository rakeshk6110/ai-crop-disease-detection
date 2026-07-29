import { useEffect, useState } from "react";
import API from "../services/api";

function AdminAdvisories() {

    const [advisories, setAdvisories] = useState([]);

    const [form, setForm] = useState({
        crop_name: "",
        title: "",
        content: ""
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchAdvisories();
    }, []);

    const fetchAdvisories = async () => {
        try {
            const res = await API.get("/crop/admin/advisories/");
            setAdvisories(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (editId) {
                await API.put(`/crop/admin/advisories/${editId}/`, form);
            } else {
                await API.post("/crop/admin/advisories/", form);
            }

            setForm({
                crop_name: "",
                title: "",
                content: ""
            });

            setEditId(null);

            fetchAdvisories();

        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (item) => {
        setForm(item);
        setEditId(item.id);
    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this advisory?")) return;

        await API.delete(`/crop/admin/advisories/${id}/`);
        setForm({
                crop_name: "",
                title: "",
                content: ""
            });
        fetchAdvisories();
    };

    return (

        <div className="container">

            <h1>Manage Advisories</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="crop_name"
                    placeholder="Crop Name"
                    value={form.crop_name}
                    onChange={handleChange}
                    required
                />

                <input
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="content"
                    placeholder="Content"
                    value={form.content}
                    onChange={handleChange}
                    required
                />

                <button>

                    {editId ? "Update Advisory" : "Add Advisory"}

                </button>

            </form>

            <hr />

            {advisories.map((item) => (

                <div className="advisory-card" key={item.id}>

                    <h2>{item.crop_name}</h2>

                    <h3>{item.title}</h3>

                    <p>{item.content}</p>

                    <button onClick={() => handleEdit(item)}>
                        Edit
                    </button>

                    <button
                        onClick={() => handleDelete(item.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default AdminAdvisories;