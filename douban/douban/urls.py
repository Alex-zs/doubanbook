"""douban URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin
from main import views as main_views
from users.views import ajax_val
from django.conf.urls.static import static
from django.conf import settings
import django.views.static
from douban.settings import BASE_DIR
import os
from django.conf.urls import handler404, handler500

urlpatterns = [

    # main 
    url(r'',include('main.urls')),

    # users
    url(r'^accounts/', include('users.urls')),
    url(r'^captcha/', include('captcha.urls')),
    url(r'^ajax_val/', ajax_val, name='ajax_val'),

    # admin
    url(r'^admin/', admin.site.urls),

    #book
    url(r'^book/', include('book.urls')),

    #富文本编辑器
    url(r'^ueditor/', include('DjangoUeditor.urls')),
    url(r'static/ueditor/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'ueditor')}),

    #静态文件路径
    url(r'static/admin/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'admin')}),
    url(r'css/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'css')}),
    url(r'static/css/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'css')}),
    url(r'images/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'images')}),
    url(r'static/images/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'images')}),
    url(r'js/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'js')}),
    url(r'static/js/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'js')}),
    url(r'font/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'font')}),
    url(r'static/font/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'static', 'font')}),
    url(r'media/book_img/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'media', 'book_img')}),
    url(r'article_img/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'media', 'article_img')}),
    url(r'head_img/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'media', 'head_img')}),
    url(r'media/static/img/(?P<path>.*)', django.views.static.serve, {'document_root': os.path.join(BASE_DIR, 'media', 'static','img')}),

]

handler404 = main_views.page_not_found
handler500 = main_views.page_not_found
