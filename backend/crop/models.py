from django.db import models
from django.conf import settings

class CropDetection(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    crop_name = models.CharField(max_length=100)
    image = models.ImageField(upload_to="crop_images/")
    disease_name = models.CharField(max_length=200,blank=True)
    confidence = models.FloatField(default=0)
    severity = models.CharField(max_length=50,blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.crop_name