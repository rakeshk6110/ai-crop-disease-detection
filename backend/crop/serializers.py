from rest_framework import serializers
from .models import *


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

class CropAdvisorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CropAdvisory
        fields = "__all__"


class FarmerQuerySerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username", read_only=True)
    class Meta:
        model = FarmerQuery
        fields = "__all__"
        read_only_fields = [
            "user",
            "reply",
            "status",
            "created_at",
        ]