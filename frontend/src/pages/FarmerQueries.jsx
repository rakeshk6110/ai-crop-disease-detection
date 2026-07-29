import { useEffect, useState } from "react";
import API from "../services/api";

function FarmerQueries() {

    const [queries, setQueries] = useState([]);

    const [form, setForm] = useState({
        subject: "",
        question: ""
    });

    useEffect(() => {
        fetchQueries();
    }, []);

    const fetchQueries = async () => {

        try {

            const response = await API.get("/crop/queries/");

            setQueries(response.data);

        } catch (error) {

            console.log(error);

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

            await API.post("/crop/queries/", form);

            setForm({
                subject: "",
                question: ""
            });

            fetchQueries();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container">

            <h1>Farmer Queries</h1>

            <form onSubmit={handleSubmit}>

                <input
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="question"
                    placeholder="Enter your question"
                    value={form.question}
                    onChange={handleChange}
                    required
                />

                <button>
                    Submit Query
                </button>

            </form>

            <hr />

            <h2>My Queries</h2>

            {queries.length === 0 ? (

                <p>No queries submitted.</p>

            ) : (

                queries.map((item) => (

                    <div
                        className="query-card"
                        key={item.id}
                    >

                        <h3>{item.subject}</h3>

                        <p>
                            <b>Question:</b> {item.question}
                        </p>

                        <p>
                            <b>Status:</b> {item.status}
                        </p>

                        <p>
                            <b>Reply:</b>{" "}
                            {item.reply || "Waiting for admin reply"}
                        </p>

                    </div>

                ))

            )}

        </div>
    );
}

export default FarmerQueries;