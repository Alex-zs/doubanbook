from django import forms
from .models import Article,comment_article

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = ['title','content','article_cate','image']

class Comment_Article_Form(forms.ModelForm):
	class Meta:
		model = comment_article
		fields = ['content']