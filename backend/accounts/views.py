from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from .token_serializer import CustomTokenObtainPairSerializer
from .serializers import RegisterSerializer

class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            user=serializer.save()
            return Response({
                "message":"User Register Successfully",
                "user": {
                    "id":user.id,
                    "username":user.username,
                    "email":user.email,
                    "role":user.role
                    
                }
            },status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class ProfileView(APIView):
         permission_classes = [IsAuthenticated]

         def get(self, request):
               return Response({
                     "message":"Welcome!",
                     "username":request.user.username,
                     "email":request.user.email,
                     "role":request.user.role,
               },status=status.HTTP_200_OK)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer