from django.db import models
from DjangoUeditor.models import UEditorField
from users.models import User
from django.utils.html import strip_tags
from .storage import ImageStorage
import markdown


class Article(models.Model):
    category=(('小说','小说'),('散文','散文'),('感悟','感悟'),('新闻','新闻'),)
    title = models.CharField('标题',max_length=256)
    pub_date = models.DateTimeField('发表时间',auto_now_add=True)
    update_time = models.DateTimeField('更新时间',auto_now=True,null=True)
    content = UEditorField('内容',toolbars="full",upload_settings={"imageMaxSize":1204000},settings={},)
    author = models.ForeignKey(User,verbose_name="作者",default="",null=True,on_delete=models.SET_NULL)
    abstract = models.CharField('摘要',max_length=256,null=True,blank=True)
    article_cate = models.CharField('类别',max_length=5,choices=category,default='小说')
    views = models.PositiveIntegerField(default=0)
    image = models.ImageField('封面',upload_to='article_img',storage=ImageStorage())
    isHomeArticle = models.BooleanField('首页文章',default=False)
    isDisplay = models.BooleanField('文章展示',default=False)


    def save(self,*args,**kwargs):
        if not self.abstract:
            md = markdown.Markdown(extensions=[
                'markdown.extensions.extra',
                'markdown.extensions.codehilite',
                ])
            self.abstract = strip_tags(md.convert(self.content))[:54]
        super(Article,self).save(*args,**kwargs)
    def increase_views(self):
        self.views += 1
        self.save(update_fields=['views'])

    def __str__(self):
        return self.title
    class Meta:
        verbose_name = r"用户文章"
        verbose_name_plural = r"用户文章"

    
class comment_article(models.Model):
    content = models.CharField('内容',max_length=145)
    pub_date = models.DateTimeField('发表时间',auto_now_add=True)
    author = models.ForeignKey(User, default="")
    article = models.ForeignKey(Article,default="")
    class Meta:
        verbose_name = r"文章评论"
        verbose_name_plural = r"文章评论"
        
    

class article_save(models.Model):
    article = models.ForeignKey(Article,default="")
    user = models.ForeignKey(User,default="")
    time = models.DateTimeField('时间',auto_now_add=True)
    class Meta:
        verbose_name = r"文章收藏"
        verbose_name_plural = r"文章收藏"



