import { useEffect, useState } from "react";
import API from "../services/api";

function CropAdvisories() {

    const [advisories, setAdvisories] = useState([]);

    useEffect(() => {
        fetchAdvisories();
    }, []);

    const fetchAdvisories = async () => {
        try {
            const response = await API.get("/crop/advisories/");
            setAdvisories(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">

            <h1>Crop Advisories</h1>

            {advisories.length === 0 ? (
                <p>No advisories available.</p>
            ) : (
                advisories.map((item) => (
                    <div className="advisory-card" key={item.id}>

                        <h2>{item.crop_name}</h2>

                        <h3>{item.title}</h3>

                        <p>{item.content}</p>

                        <small>
                            {new Date(item.created_at).toLocaleDateString()}
                        </small>

                    </div>
                ))
            )}

        </div>
    );
}

export default CropAdvisories;