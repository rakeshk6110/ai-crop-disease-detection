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
    <div className="page">
  <div className="container">

    <h1 className="page-title">📋 Prediction History</h1>

    <div className="history-grid">

      {history.map((item)=>(
        <div key={item.id} className="history-card">

          <img
            src={`${item.image}`}
            alt="leaf"
            className="history-image"
          />

          <div className="history-content">

            <div className="history-crop">
              {item.crop_name}
            </div>

            <div className="history-disease">
              {item.disease_name}
            </div>

            <div className="history-meta">
              <span>{item.confidence}%</span>
              <span>{item.severity}</span>
            </div>

          </div>
        </div>
      ))}

    </div>
  </div>
</div>
  );
}

export default HistoryPage;