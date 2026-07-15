from rest_framework import serializers
from .models import CropDetection

class CropDetectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CropDetection
        fields = "__all__"