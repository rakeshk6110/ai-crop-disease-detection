import { useState } from "react";
import {Link } from "react-router-dom"
import API from "../services/api";

function UploadPage() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);

      const response = await API.post(
        "/crop/detect/",
        formData
      );

      setResult(response.data.data);

    } catch (error) {
      console.log(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
  <Link to="/history">View History</Link>

  <button
    style={{ marginLeft: "20px" }}
    onClick={() => {
      localStorage.clear();
      window.location.href = "/";
    }}
  >
    Logout
  </button>
</div>
      <h2>Crop Disease Detection</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        {loading ? "Analyzing..." : "Upload & Predict"}
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={result.image}
            alt="leaf"
            width="250"
          />

          <h3>Crop: {result.crop_name}</h3>
          <h3>Disease: {result.disease_name}</h3>
          <h3>Confidence: {result.confidence}%</h3>
          <h3>Severity: {result.severity}</h3>
        </div>
      )}
    </div>
  );
}

export default UploadPage;