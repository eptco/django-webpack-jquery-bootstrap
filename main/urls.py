from django.conf.urls import url
from main import views

urlpatterns = [
	url(r'^page1/$', views.page1, name="page1"), 
	url(r'^page2/$', views.page2, name="page2")
]
