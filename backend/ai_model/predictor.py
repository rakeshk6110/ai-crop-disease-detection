import hashlib
import os
import tensorflow as tf

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "model", "crop_model.h5")

print("MODEL PATH:", MODEL_PATH)
print("EXISTS:", os.path.exists(MODEL_PATH))
print("SIZE:", os.path.getsize(MODEL_PATH))

with open(MODEL_PATH, "rb") as f:
    print("SHA256:", hashlib.sha256(f.read()).hexdigest())

model = tf.keras.models.load_model(MODEL_PATH)