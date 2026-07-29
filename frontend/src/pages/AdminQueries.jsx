import { useEffect, useState } from "react";
import API from "../services/api";

function AdminQueries() {

    const [queries, setQueries] = useState([]);
    const [reply, setReply] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        fetchQueries();
    }, []);

    const fetchQueries = async () => {
        try {
            const res = await API.get("/crop/admin/queries/");
            setQueries(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleReply = async () => {

        try {

            await API.put(`/crop/admin/queries/${selectedId}/`, {
                reply: reply,
                status: "Answered"
            });

            setReply("");
            setSelectedId(null);

            fetchQueries();

        } catch (err) {
            console.log(err);
        }
    };

    return (

        <div className="container">

            <h1>Farmer Queries</h1>

            {queries.map((item) => (

                <div className="query-card" key={item.id}>

                    <h3>{item.subject}</h3>

                    <p>
                        <b>Farmer:</b> {item.username}
                    </p>

                    <p>
                        <b>Question:</b> {item.question}
                    </p>

                    <p>
                        <b>Status:</b> {item.status}
                    </p>

                    {selectedId === item.id ? (

                        <>
                            <textarea
                                placeholder="Enter Reply"
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                            />

                            <button onClick={handleReply}>
                                Submit Reply
                            </button>
                        </>

                    ) : (

                        <button
                            onClick={() => {
                                setSelectedId(item.id);
                                setReply(item.reply || "");
                            }}
                        >
                            Reply
                        </button>

                    )}

                </div>

            ))}

        </div>

    );
}

export default AdminQueries;