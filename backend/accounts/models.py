from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin','Admin'),
        ('farmer','Farmer')
    )
    full_name = models.CharField(max_length=150)
    phone = models.CharField(max_length=15, blank=True)
    role = models.CharField(max_length=10,choices=ROLE_CHOICES, default='farmer')
    profile_imaage = models.ImageField(upload_to='profile/',blank=True,null=True)

    def __str__(self):
        return self.username #used to diplay in the admain page
    
