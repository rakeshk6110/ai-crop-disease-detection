import { useEffect, useState } from "react";
import API from "../services/api";

function HistoryPage() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await API.get("/crop/history/");
      console.log("history",response.data)
      setHistory(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Prediction History</h2>

      {history.map((item) => (
        
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <img
            src={item.image}
            alt="leaf"
            width="120"
          />
          <h3>{item.crop_name}</h3>
          <p><strong>Disease:</strong> {item.disease_name}</p>
          <p><strong>Confidence:</strong> {item.confidence}%</p>
          <p><strong>Severity:</strong> {item.severity}</p>
        </div>
      ))}
    </div>
  );
}

export default HistoryPage;