from django.db import models
from users.models import User
import logging


class FLabel(models.Model):
    # id
    labelName = models.CharField(verbose_name="标签名", max_length=10)

    def __str__(self):
        return self.labelName

    class Meta:
        verbose_name = r"父标签"
        verbose_name_plural = r"父标签"


class SLabel(models.Model):
    # id
    labelName = models.CharField(verbose_name="标签名", max_length=10)
    fatherLabel = models.ForeignKey(FLabel,verbose_name="父标签")

    def __str__(self):
        return self.fatherLabel.labelName + ":" + self.labelName

    class Meta:
        verbose_name = r"子标签"
        verbose_name_plural = r"子标签"


class Book(models.Model):
    # id
    bookname = models.CharField(verbose_name="书名", max_length=30)
    originName = models.CharField(verbose_name="原作名", max_length=30, default="")
    introduction = models.TextField(verbose_name="简介", max_length=500)
    createTime = models.DateTimeField(verbose_name="创建时间", auto_now_add=True)
    lastEditTime = models.DateTimeField(verbose_name="最后修改时间", auto_now=True)
    author = models.CharField(verbose_name="作者", max_length=30, default="")
    authorInfo = models.TextField(verbose_name="作者信息", max_length=500, default="")
    authorPhoto = models.ImageField(verbose_name="作者照片", upload_to='book_img', null=True)
    translator = models.CharField(verbose_name="译者", null=True, max_length=30)
    pressTime = models.DateTimeField(verbose_name="出版时间", null=True)
    press = models.CharField(verbose_name="出版社", null=True, max_length=30)
    page = models.IntegerField(verbose_name="页数", default=0)
    price = models.IntegerField(verbose_name="价格", default=99999)
    owner = models.ForeignKey(User, verbose_name="编辑人", editable=False, null=True, on_delete=models.SET_NULL)
    label = models.ForeignKey(SLabel, verbose_name="标签", null=True, on_delete=models.SET_NULL)
    cover = models.ImageField(verbose_name="封面", upload_to='book_img')
    score = models.FloatField(verbose_name="评分", null=True, default=5)

    class Meta:
        verbose_name = r'图书'
        verbose_name_plural = r'图书'
        get_latest_by = "lastEditTime"

    def __str__(self):
        return self.bookname


class Comment(models.Model):
    # id
    SCORE_CHOICES = (
        (1, r"1星"),
        (2, r"2星"),
        (3, r"3星"),
        (4, r"4星"),
        (5, r"5星"),
    )
    book = models.ForeignKey(Book, verbose_name="所在书目")
    owner = models.ForeignKey(User, verbose_name="评论人")
    score = models.IntegerField(choices=SCORE_CHOICES, default=0, verbose_name="评分")
    content = models.CharField(max_length=200, verbose_name="内容")
    createTime = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    praise = models.IntegerField(default=0, verbose_name="赞数")

    class Meta:
        verbose_name = r'评论'
        verbose_name_plural = r'评论'
        get_latest_by = "createTime"

    def __str__(self):
        return self.book.bookname + ":" + self.content


class Praise(models.Model):
    # id
    owner = models.ForeignKey(User, verbose_name="点赞者")
    comment = models.ForeignKey(Comment, related_name="praiseToComment", verbose_name="被赞评论")

    class Meta:
        verbose_name = r"评论点赞"
        verbose_name_plural = r"评论点赞"


class Collection(models.Model):
    # id
    collector = models.ForeignKey(User, verbose_name="收藏人")
    book = models.ForeignKey(Book, verbose_name="收藏书")

    class Meta:
        verbose_name = r"收藏管理"
        verbose_name_plural = r"收藏管理"

    def __str__(self):
        return self.collector.name + ":" + self.book.bookname