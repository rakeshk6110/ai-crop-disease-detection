import os

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.generics import ListAPIView
from django.db.models import Count

from .serializers import CropDetectionSerializer
from .models import CropDetection

from ai_model.predictor import predict


class CropDetectionView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        serializer = CropDetectionSerializer(data=request.data)

        if serializer.is_valid():

            # Save image temporarily
            detection = serializer.save(user=request.user)

            image_path = detection.image.path

            # AI Prediction
            result = predict(image_path)

            disease = result["disease"]
            confidence = result["confidence"]

            # Severity Logic
            if confidence >= 85:
                severity = "Low"
            elif confidence >= 70:
                severity = "Medium"
            else:
                severity = "High"

            # Update database
            detection.crop_name = disease.split("_")[0]
            detection.disease_name = disease
            detection.confidence = confidence
            detection.severity = severity
            detection.save()

            return Response({
                "message": "Disease detected successfully",
                "data": {
                    "id": detection.id,
                    "crop_name": disease.split("_")[0],
                    "disease_name": disease,
                    "confidence": confidence,
                    "severity": severity,
                    "image": request.build_absolute_uri(detection.image.url),
                    "uploaded_at": detection.uploaded_at
                }
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DetectionHistoryView(ListAPIView):

    serializer_class = CropDetectionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CropDetection.objects.filter(
            user=self.request.user
        ).order_by("uploaded_at")

class CropAnalyticsView(ListAPIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        total = CropDetection.objects.count()

        top_diseases = (
            CropDetection.objects
            .values("disease_name")
            .annotate(count=Count("id"))
            .order_by("count")[:5]
        )
        severity_stats = (
            CropDetection.objects
            .values("severity")
            .annotate(count=Count("id"))
        )
        crop_stats = (
            CropDetection.objects
            .values("crop_name")
            .annotate(count=Count("id"))
            .order_by("count")
        )
        return Response({
            "total_detections":total,
            "top_disease": list(top_diseases),
            "severity":list(severity_stats),
            "crop_stats":list(crop_stats)
        })
