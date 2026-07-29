
from django.contrib import admin
from django.urls import path, include
from accounts.views import CustomTokenObtainPairView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/',include("accounts.urls")),
    path('api/token/',CustomTokenObtainPairView.as_view(), name="token_obtain_pair"), #access token
    path('api/token/refresh/',CustomTokenObtainPairView.as_view(), name="token_refresh"), #new access token
    path('api/crop/',include('crop.urls')),
    path('api/disease/',include('disease.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)