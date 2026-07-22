from django.urls import path
from .views import *

urlpatterns = [
    path("detect/",CropDetectionView.as_view(), name="detect"),
    path("history/", DetectionHistoryView.as_view(), name="history"),
    path("analytics/", CropAnalyticsView.as_view(), name="analytics"),

]