import { useEffect, useState } from "react";
import API from "../services/api";

function Analytics() {

    const [data, setData] = useState(null);

    useEffect(() => {
        API.get("/crop/admin/analytics/")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (!data) return <h2>Loading...</h2>;

    return (
        <div>

            <h1>Analytics</h1>

            <div className="dashboard-grid">

                <div className="card">
                    <h3>Total Farmers</h3>
                    <h2>{data.total_farmers}</h2>
                </div>

                <div className="card">
                    <h3>Total Predictions</h3>
                    <h2>{data.total_predictions}</h2>
                </div>

                <div className="card">
                    <h3>Total Diseases</h3>
                    <h2>{data.total_diseases}</h2>
                </div>

                <div className="card">
                    <h3>Total Advisories</h3>
                    <h2>{data.total_advisories}</h2>
                </div>

            </div>

        </div>
    );
}

export default Analytics;