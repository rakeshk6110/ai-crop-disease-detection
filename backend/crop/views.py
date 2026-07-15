from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from .serializer import CropDetectionSerializer
from ai_model.predictor import predict
class CropUploadView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self,request):
        data = request.data.copy()
        data["user"] = request.user.id

        serializer = CropDetectionSerializer(data=data)

        if serializer.is_valid():
            
            #save uploaded image
            crop = serializer.save()

            #AI prediction
            prediction = predict(crop.image.path)

            #save prediction in db
            crop.disease_name = prediction["disease"]
            crop.confidence = prediction["confidence"]
            crop.severity = prediction["severity"]
            crop.save()

            return Response({
                "message": "Prediction successfully",
                "prediction":{
                    "crop":crop.crop_name,
                    "disease":crop.disease_name,
                    "confidence":crop.confidence,
                    "severity":crop.severity,
                    "image":crop.image.url
                }
            },status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)