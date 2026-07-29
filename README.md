# 🌱 AI-Based Crop Disease Detection and Farmer Advisory System

An AI-powered web application that helps farmers identify crop diseases from leaf images using Deep Learning. The system predicts the disease, provides confidence scores, severity levels, disease information, treatment suggestions, crop advisories, and allows farmers to communicate with agricultural experts.

---

## 📸 Project Screenshots

> Add screenshots here after deployment.

- Login Page
- Farmer Dashboard
- Disease Detection
- Prediction History
- Admin Dashboard
- Analytics
- Advisory Management

---

# 🚀 Features

## 👨‍🌾 Farmer

- User Registration & Login
- JWT Authentication
- Upload Crop Leaf Image
- AI Disease Detection
- Disease Confidence Score
- Severity Detection
- Disease Details
- Treatment Suggestions
- Prediction History
- Crop Advisories
- Submit Farmer Queries
- View Query Replies

---

## 👨‍💼 Admin

- Secure Admin Login
- Dashboard
- Analytics
- Manage Crop Advisories
- View Farmer Queries
- Reply to Queries
- Recent Predictions
- System Statistics

---

# 🧠 AI Model

- CNN Deep Learning Model
- TensorFlow / Keras
- Image Classification
- 15 Crop Disease Classes

---

# 🌾 Supported Diseases

### Pepper

- Pepper__bell___Bacterial_spot
- Pepper__bell___healthy

### Potato

- Potato___Early_blight
- Potato___Late_blight
- Potato___healthy

### Tomato

- Tomato_Bacterial_spot
- Tomato_Early_blight
- Tomato_Late_blight
- Tomato_Leaf_Mold
- Tomato_Septoria_leaf_spot
- Tomato_Spider_mites_Two_spotted_spider_mite
- Tomato__Target_Spot
- Tomato__Tomato_YellowLeaf__Curl_Virus
- Tomato__Tomato_mosaic_virus
- Tomato_healthy

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Axios
- Recharts
- React Icons
- CSS

## Backend

- Python
- Django
- Django REST Framework
- Simple JWT

## Database

- SQLite (Development)
- PostgreSQL (Production)

## AI

- TensorFlow
- Keras
- NumPy
- Pillow

---

# 📂 Project Structure

```
AI-Crop-Disease-Detection
│
├── backend
│   ├── accounts
│   ├── crop
│   ├── disease
│   ├── media
│   ├── manage.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI-Crop-Disease-Detection.git

cd AI-Crop-Disease-Detection
```

---

# Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
```

---

## Apply Migrations

```bash
python manage.py migrate
```

---

## Create Admin

```bash
python manage.py createsuperuser
```

---

## Start Backend

```bash
python manage.py runserver
```

Backend URL

```
http://127.0.0.1:8000/
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173/
```

---

# API Endpoints

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/accounts/register/ |
| POST | /api/token/ |
| POST | /api/token/refresh/ |

---

## Crop Detection

| Method | Endpoint |
|---------|----------|
| POST | /api/crop/detect/ |
| GET | /api/crop/history/ |

---

## Disease

| Method | Endpoint |
|---------|----------|
| GET | /api/disease/details/<name>/ |

---

## Advisory

| Method | Endpoint |
|---------|----------|
| GET | /api/crop/advisories/ |
| GET | /api/crop/admin/advisories/ |

---

## Farmer Query

| Method | Endpoint |
|---------|----------|
| POST | /api/crop/query/ |
| GET | /api/crop/myqueries/ |
| GET | /api/crop/admin/queries/ |

---

## Admin Analytics

| Method | Endpoint |
|---------|----------|
| GET | /api/crop/admin/analytics/ |

---

# Future Improvements

- Email Notifications
- Weather API Integration
- Fertilizer Recommendation
- Multi-language Support
- Mobile Application
- Real-time Camera Detection

---

# Author

**Rakesh K**

Python Full Stack Developer

GitHub:
https://github.com/rakeshk110

LinkedIn:
https://linkedin.com/in/rakeshk110

---

# License

This project is developed for educational and portfolio purposes.