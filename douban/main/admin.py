from django.contrib import admin
from .models import *
import datetime

admin.site.site_header = '豆瓣读书管理系统'
admin.site.site_title = '豆瓣管理'


class ArticleTimeModelFilter(admin.SimpleListFilter):
    title = r'创建时间'
    parameter_name = r'创建时间'

    def lookups(self, request, model_admin):
        now = datetime.datetime.now()
        yearago = now - datetime.timedelta(days=365)
        monthago = now - datetime.timedelta(days=30)
        dayago = now - datetime.timedelta(days=1)
        return [
            (dayago, r"一天内"),
            (monthago, r"一月内"),
            (yearago, r"一年内"),
        ]

    def queryset(self, request, queryset):
        now = datetime.datetime.now()
        try:
            value = self.value()
        except:
            value = None
        if value:
            return queryset.filter(lastEditTime__range=(value, now))
        else:
            return queryset


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display=('title', 'author', 'pub_date', 'update_time','isHomeArticle','isDisplay')
    search_fields = ('title', 'content')
    list_per_page = 10
    list_filter = (ArticleTimeModelFilter,)
    fieldsets = (
        [u'在此编辑内容', {
            'fields': ('title', 'content', 'article_cate', 'abstract', 'image', 'update_time','isHomeArticle','isDisplay'),
        }],
    )
    readonly_fields = ('update_time',)

    def save_model(self, request, obj, form, change):
        obj.author = request.user
        # logging.debug(request.user)
        obj.save()


@admin.register(comment_article)
class Comment_article(admin.ModelAdmin):
    list_display = ('id', 'author', 'article')
    list_display_links = ('id', 'author', 'article')


@admin.register(article_save)
class Save_Article(admin.ModelAdmin):
    list_display = ('id', 'user', 'article')




