from django.db import models

class Disease(models.Model):
    disease_name = models.CharField(max_length=200,unique=True)
    description = models.TextField()
    symptoms = models.TextField()
    causes = models.TextField()
    solution = models.TextField()
    prevention = models.TextField()

    def __str__(self):
        return self.disease_name
