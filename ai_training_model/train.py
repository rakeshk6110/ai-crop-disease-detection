import tensorflow as tf
import matplotlib.pyplot as plt
import os
import json

from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, Dropout, GlobalAveragePooling2D
from tensorflow.keras.models import Model
from tensorflow.keras.preprocessing import image_dataset_from_directory
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint


# Dataset Paths
TRAIN_DIR = "dataset/train"
VALID_DIR = "dataset/valid"
TEST_DIR = "dataset/test"

# Image Settings
IMAGE_SIZE = (224, 224)
BATCH_SIZE = 32

# Training
EPOCHS = 10
NUM_CLASSES = 15

train_dataset = image_dataset_from_directory(
    TRAIN_DIR,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical",
    shuffle=True
)

validation_dataset = image_dataset_from_directory(
    VALID_DIR,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical",
    shuffle=False
)

test_dataset = image_dataset_from_directory(
    TEST_DIR,
    image_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    label_mode="categorical",
    shuffle=False
)

class_names = train_dataset.class_names

print(class_names)

os.makedirs("labels", exist_ok=True)

with open("labels/labels.txt", "w") as file:
    for label in class_names:
        file.write(label + "\n")

AUTOTUNE = tf.data.AUTOTUNE

train_dataset = train_dataset.prefetch(AUTOTUNE)
validation_dataset = validation_dataset.prefetch(AUTOTUNE)
test_dataset = test_dataset.prefetch(AUTOTUNE)

base_model = MobileNetV2(
    weights="imagenet",
    include_top=False,
    input_shape=(224, 224, 3)
)

base_model.trainable = False

x = base_model.output

x = GlobalAveragePooling2D()(x)

x = Dropout(0.3)(x)

output = Dense(
    NUM_CLASSES,
    activation="softmax"
)(x)

model = Model(
    inputs=base_model.input,
    outputs=output
)
model.summary()

model.compile(
    optimizer="adam",
    loss="categorical_crossentropy",
    metrics=["accuracy"]
)

os.makedirs("models", exist_ok=True)

checkpoint = ModelCheckpoint(
    "models/crop_model.keras",
    monitor="val_accuracy",
    save_best_only=True,
    mode="max",
    verbose=1
)

early_stop = EarlyStopping(
    monitor="val_loss",
    patience=3,
    restore_best_weights=True
)
# Model Training
# history = model.fit(
#     train_dataset,
#     validation_data=validation_dataset,
#     epochs=EPOCHS,
#     callbacks=[checkpoint, early_stop]
# )



# history_dict = history.history

# with open("models/history.json", "w") as file:
#     json.dump(history_dict, file)

# ==============================
# Evaluate on Test Dataset
# ==============================


print("\nLoading best saved model...")

best_model = tf.keras.models.load_model("models/crop_model.keras")

test_loss, test_accuracy = best_model.evaluate(test_dataset)

print("\n==============================")
print(f"Test Accuracy: {test_accuracy:.4f}")
print(f"Test Loss: {test_loss:.4f}")
print("==============================")