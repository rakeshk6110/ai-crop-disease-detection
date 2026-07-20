from django.db import models
from accounts.models import User

class CropDetection(models.Model):
    SEVERITY_CHOICE = [
        ("Low","low"),
        ("Medium","medium"),
        ("High","high")    
    ]
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    crop_name = models.CharField(max_length=100,blank=True)
    image = models.ImageField(upload_to="crop_images/")
    disease_name = models.CharField(max_length=200,blank=True)
    confidence = models.FloatField(default=0)
    severity = models.CharField(max_length=50, choices=SEVERITY_CHOICE,blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.disease_name