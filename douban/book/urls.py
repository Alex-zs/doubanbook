from django.conf.urls import url
from .views import book_list, book_show, book_collect, book_uncollect, search, jump


urlpatterns = [
    url(r'^index/$', book_list, name='book_list'),
    url(r'^showbook/(\d+)/$', book_show, name='book_contain'),
    url(r'^booklist/$', book_list, name='book_list'),
    url(r'^booklist/(\d+)/$', book_list, name='book_list_classify'),
    url(r'^collect/(\d+)/$', book_collect, name='book_collect'),
    url(r'^uncollect/(\d+)/$', book_uncollect, name='book_uncollect'),
    url(r'^search/(.*)/$',search,name='search'),
    url(r'^jump/$',jump,name='jump'),
    # url(r'^get_label/(?P<obj_id>\d+)', twice_label_choice),
]