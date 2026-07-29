from django.urls import path
from .views import *

from rest_framework.routers import DefaultRouter

urlpatterns = [
    path("detect/",CropDetectionView.as_view(), name="detect"),
    path("history/", DetectionHistoryView.as_view(), name="history"),
    path("analytics/", CropAnalyticsView.as_view(), name="analytics"),
    path("advisories/",CropAdvisoryView.as_view(), name="crop_adviosries"),
    path("queries/",FarmerQueryView.as_view(),name="farmer_queries"),
    path("admin/queries/", AdminQueryListView.as_view(), name="admin-query-list"),
    path("admin/queries/<int:pk>/",AdminReplyView.as_view(),name="admin-query-reply"),
    path("admin/analytics/",AdminDashboardView.as_view(),name="admin-dashboard",),
]

router = DefaultRouter()
router.register("admin/advisories",CropAdvisoryAdminView,basename="admin-advisory")
urlpatterns += router.urls