from rest_framework import serializers

class DashboardSerializer(serializers.Serializer):
    total_farmers = serializers.IntegerField()
    total_predictions = serializers.IntegerField()
    total_diseases = serializers.IntegerField()
    total_advisories = serializers.IntegerField()
    total_queries = serializers.IntegerField()
    pending_queries = serializers.IntegerField()
    answered_queries = serializers.IntegerField()
    