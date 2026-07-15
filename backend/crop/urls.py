from django.urls import path
from .views import CropUploadView

urlpatterns = [
    path("upload/",CropUploadView.as_view(), name="crop_upload")

]