from django.conf.urls import url
from .views import book_list, book_show, book_collect, book_uncollect, search, jump, comment_delete


urlpatterns = [
    url(r'^index/$', book_list, name='book_list'),
    url(r'^showbook/(\d+)/$', book_show, name='book_contain'),
    url(r'^booklist/$', book_list, name='book_list'),
    url(r'^booklist/(\d+)/$', book_list, name='book_list_classify'),
    url(r'^booklist/(\d+)/(\d+)/$', book_list, name='book_list_sort'),
    url(r'^collect/(\d+)/$', book_collect, name='book_collect'),
    url(r'^uncollect/(\d+)/$', book_uncollect, name='book_uncollect'),
    url(r'^search/(.*)/$',search,name='search'),
    url(r'^jump/$',jump,name='jump'),
    url(r'^commentdelete/(?P<id>[0-9]+)/$',comment_delete,name='comment_delete'),
    # url(r'^get_label/(?P<obj_id>\d+)', twice_label_choice),
]