import { useEffect, useState } from "react";
import API from "../services/api";
import {
  BarChart, Bar, XAxis, YAxis,
  PieChart, Pie, Tooltip
} from "recharts";
import { ClipLoader } from "react-spinners";

function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    const response = await API.get("/crop/analytics/");
    console.log(response.data)
    setData(response.data);
  };

  if (!data) {
    return (
        <div className="loader" style={{"textAlign":"center"}}>
            <ClipLoader  size={100} color="#16a34a" />
        </div>
    );
}

  return (
<div className="page">
  <div className="container">

    <h1 className="page-title">📊 Analytics Dashboard</h1>

    <div className="stats-grid">

      <div className="stat-card">
        <div className="stat-title">Total Detections</div>
        <div className="stat-number">
          {data.total_detections}
        </div>
      </div>

    </div>

    <div className="chart-card">
      <h2 className="chart-title">Top Detected Diseases</h2>

      {/*BarChart*/}
    </div>
      <h2>Top Diseases</h2>

      <BarChart
        width={700}
        height={350}
        data={data?.top_disease || []}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 180, bottom: 20 }}
      >
        <XAxis type="number" />
        <YAxis
          type="category"
          dataKey="disease_name"
          width={170}
          tickFormatter={(value) => value.replace("___", " - ")}
        />
        <Tooltip
          formatter={(value) => [value, "Count"]}
          labelFormatter={(label) => label.replace("___", " - ")}
        />
        <Bar dataKey="count" radius={[0, 6, 6, 0]} />
      </BarChart>
    <div className="chart-card">
      <h2 className="chart-title">Severity Distribution</h2>

      {/* Your PieChart here */}
    </div>
      <h2>Severity Distribution</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data?.severity || []}
          dataKey="count"
          nameKey="severity"
          outerRadius={100}
          label
        />
        <Tooltip />
      </PieChart>

  </div>
</div>


      

      

  );
}

export default Dashboard;