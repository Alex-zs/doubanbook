from django.contrib import admin
from .models import Book, Comment, FLabel, SLabel, Praise, Collection
import datetime
import logging


class BookTimeModelFilter(admin.SimpleListFilter):
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


class BookAdmin(admin.ModelAdmin):
    # change_form_template = 'admin/extras/record_change_form.html'
    list_display = ['bookname', 'author', 'label', 'owner', 'score']
    list_filter = (BookTimeModelFilter,)
    search_fields = ['bookname', 'author']

    fieldsets = (
        [u'主要信息', {
            'fields': ('bookname', 'introduction', 'author', 'page', 'price', 'score'),
        }],
        [u'附加', {
            # 'fields': ('formfLabel', 'formsLabel', 'cover'),
            'fields': ('authorInfo', 'authorPhoto', 'translator', 'press', 'pressTime', 'originName', 'label', 'cover'),
        }]
    )
    readonly_fields = ('score',)

    def save_model(self, request, obj, form, change):
        obj.owner = request.user
        logging.debug(request.user)
        obj.save()

    # def label(self, obj):
    #     fLabel = obj.get_father_labelname()
    #     sLabel = obj.get_secondary_labelname()
    #     retstr = ""
    #     if fLabel:
    #         retstr = retstr + fLabel
    #         if sLabel:
    #             retstr = retstr + ":" + sLabel
    #     return str(retstr)
    # label.short_description = "标签"


class CommentAdmin(admin.ModelAdmin):
    list_display = ['book', 'owner', 'createTime']


class FLabelAdmin(admin.ModelAdmin):
    list_display = ['labelName', 'sLabelNum']
    search_fields = ['labelName']

    def sLabelNum(self, obj):
        return SLabel.objects.filter(fatherLabel=obj).count()
    sLabelNum.short_description = "子标签数"


class SLabelAdmin(admin.ModelAdmin):
    list_display = ['labelName', 'fatherLabelName']
    search_fields = ['labelName']

    def fatherLabelName(self, obj):
        return obj.fatherLabel.labelName
    fatherLabelName.short_description = "父标签"


admin.site.register(Book, BookAdmin)
admin.site.register(FLabel, FLabelAdmin)
admin.site.register(SLabel, SLabelAdmin)
admin.site.register(Comment, CommentAdmin)
admin.site.register(Praise)
admin.site.register(Collection)
