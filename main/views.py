from django.shortcuts import render

# Create your views here.

def page1(request) :
	return render(request, 'page1/index.html')

def page2(request) :
	return render(request, 'page2/index.html')
