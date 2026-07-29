from rest_framework import serializers
from .models import *

class AdminQueryReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = FarmerQuery
        fields = ["reply","status"]