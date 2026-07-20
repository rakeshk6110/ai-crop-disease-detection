import os
import numpy as np
from PIL import Image
import tensorflow as tf

# Base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Load model only once
MODEL_PATH = os.path.join(BASE_DIR, "model", "crop_model.keras")
model = tf.keras.models.load_model(MODEL_PATH)

# Load labels
LABELS_PATH = os.path.join(BASE_DIR, "labels.txt")

with open(LABELS_PATH, "r") as f:
    class_names = [line.strip() for line in f.readlines()]

def predict(image_path):

    # Open image
    image = Image.open(image_path).convert("RGB")

    # Resize to training size
    image = image.resize((224, 224))

    # Convert to numpy
    image = np.array(image)

    # Normalize (same as MobileNetV2)
    image = image.astype("float32")

    # Add batch dimension
    image = np.expand_dims(image, axis=0)

    # Predict
    prediction = model.predict(image, verbose=0)

    # Best class index
    predicted_index = np.argmax(prediction)

    # Confidence
    confidence = float(prediction[0][predicted_index] * 100)

    # Disease name
    disease = class_names[predicted_index]

    return {
        "disease": disease,
        "confidence": round(confidence, 2)
    }