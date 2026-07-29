from django.urls import path
from .views import DiseaseDetailView

urlpatterns = [
    path("<str:disease_name>/",DiseaseDetailView.as_view()),
]
