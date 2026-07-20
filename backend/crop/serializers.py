from rest_framework import serializers
from .models import CropDetection


class CropDetectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = CropDetection
        fields = "__all__"
        read_only_fields = [
            "disease_name",
            "confidence",
            "severity",
            "user",
            "crop_name",
            "uploaded_at",
        ]