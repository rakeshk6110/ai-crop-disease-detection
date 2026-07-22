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
<div className="page">
  <div className="container">

    <div className="navbar">
      <div className="logo">🌿 CropAI</div>

      <div className="nav-links">
        <Link to="/history" className="nav-link">History</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>

        <button
          className="logout-btn"
          onClick={()=>{
            localStorage.clear()
            window.location.href="/"
          }}
        >
          Logout
        </button>
      </div>
    </div>

    <div className="hero">
      <h1>AI Crop Disease Detection</h1>
      <p>Upload a crop leaf image and get instant disease prediction</p>
    </div>

    <div className="upload-card">

      <div className="file-upload">
        <h3>📸 Upload Leaf Image</h3>

        <input
          type="file"
          accept="image/*"
          onChange={(e)=>setImage(e.target.files[0])}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={handleUpload}
      >
        {loading ? "Analyzing..." : "Upload & Predict"}
      </button>

      {result && (
        <>
          <img
            src={result.image}
            alt="leaf"
            className="preview-image"
          />

          <div className="result-grid">

            <div className="result-card">
              <div className="result-label">Crop</div>
              <div className="result-value">{result.crop_name}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Disease</div>
              <div className="result-value">{result.disease_name}</div>
            </div>

            <div className="result-card">
              <div className="result-label">Confidence</div>
              <div className="result-value">{result.confidence}%</div>
            </div>

            <div className="result-card">
              <div className="result-label">Severity</div>

              <div className={`result-value ${
                result.severity === "Low"
                  ? "severity-low"
                  : result.severity === "Medium"
                  ? "severity-medium"
                  : "severity-high"
              }`}>
                {result.severity}
              </div>
            </div>

          </div>
        </>
      )}
    </div>
  </div>
</div>
  );
}

export default UploadPage;