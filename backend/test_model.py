import tensorflow as tf

model = tf.keras.models.load_model("ai_model/model/model.h5")

print("Model loaded successfully!")

# model.summary()