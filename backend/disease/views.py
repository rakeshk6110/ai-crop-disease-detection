from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Disease
from .serializer import DiseaseSerializer

class DiseaseDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request,disease_name):
        disease = Disease.objects.filter(disease_name=disease_name).first()

        if not disease:
            return Response({"message":"Disease not fount"},status=404)
        serializer = DiseaseSerializer(disease)
        return Response(serializer.data)