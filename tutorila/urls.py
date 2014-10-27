from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from django.conf.urls import url, include
from rest_framework import routers
from quickstart import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'posts', views.PostViewSet)

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="index.html")),    
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', include(admin.site.urls)), # login auth: admin:admin
]
