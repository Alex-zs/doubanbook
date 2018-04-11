from django import forms
from .models import SLabel, FLabel


class BookFrom(forms.Form):
    bookname = forms.CharField(max_length=20)
    introduction = forms.CharField(max_length=500, widget=forms.Textarea)
    author = forms.CharField(max_length=30)
    # flabel = forms.ChoiceField()
    # slabel = forms.ChoiceField()
    cover = forms.ImageField()


class CommentForm(forms.Form):
    content = forms.CharField(max_length=100, widget=forms.Textarea)
    score = forms.IntegerField()
