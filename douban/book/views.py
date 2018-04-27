from django.core.serializers import json
from django.shortcuts import render, HttpResponse, reverse, redirect
from .models import Book, FLabel, SLabel, Comment, Praise, Collection
from django.core.paginator import Paginator
from .forms import BookFrom, CommentForm
from django.db.models import Q
import json
import logging


def dividePage(reqGetList, input, cut=4):
    back = {}
    back['pass'] = False
    try:
        p = Paginator(input, cut)
        back['pageCount'] = p.num_pages
        index = int(reqGetList['page'])
        back['output'] = p.page(index).object_list
        back['pass'] = True
        back['index'] = index
    except:
        back['pass'] = False
    return back


def book_list(request, labelId=0, sort=0):
    back = {
        "bookList": {},
        "labelOnTheTop": {},
        "pageCount": 1,
        "nowPage": 0,
        "upArrow": 0,
    }

    allFLabel = FLabel.objects.all()
    labelSet = {}
    i = 0
    for label in allFLabel:
        i = i + 1
        labelSet[str(i)] = {
            "id": label.id,
            "name": label.labelName,
        }
        if label.id == int(labelId):
            back["upArrow"] = i + 2
    back["labelOnTheTop"] = labelSet

    nowlabel = None
    try:
        nowlabel = FLabel.objects.get(id=labelId)
    except:
        nowlabel = None
    if nowlabel:
        allBook = Book.objects.filter(label__fatherLabel=nowlabel)
    else:
        allBook = Book.objects.all()
    logging.debug(sort)
    if int(sort) == 0:
        allBook = allBook.order_by('-score')
        if back["upArrow"] == 0:
            back["upArrow"] = 1
        logging.debug(sort)
    elif int(sort) == 1:
        allBook = allBook.order_by('-createTime')
        if back["upArrow"] == 0:
            back["upArrow"] = 2
        logging.debug(sort)
    i = 0
    bookList = {}
    for book in allBook:
        i = i + 1
        bookList[str(i)] = {
            "id": book.id,
            "bookname": book.bookname,
            "introduction": book.introduction,
            "author": book.author,
            "cover": book.cover.url,
            "press": book.press,
            "score": book.score,
        }
    result = dividePage(request.GET, bookList, 5)
    if result["pass"]:
        bookList = result['output']
        nowPage = result['index']

    back["bookList"] = bookList
    return render(request, "book_list.html", back)


def book_show(request, id):
    back = {
        "book": {},
        "comment": {},
        "form": None,
        "message": "",
        "pageCount": 1,
        "nowPage": 0,
        "collected": False
    }

    try:
        getBook = Book.objects.get(id=id)
        star = {
            "1": Comment.objects.filter(book=getBook, score=1).count(),
            "2": Comment.objects.filter(book=getBook, score=2).count(),
            "3": Comment.objects.filter(book=getBook, score=3).count(),
            "4": Comment.objects.filter(book=getBook, score=4).count(),
            "5": Comment.objects.filter(book=getBook, score=5).count(),
        }
        allScoreComment = star["1"] + star["2"] + star["3"] + star["4"] + star["5"]
        score = star["1"] * 1 + star["2"] * 2 + star["3"] * 3 + star["4"] * 4 + star["5"] * 5
        if allScoreComment != 0:
            score = score * 2.0 / allScoreComment
        else:
            score = 5
        score = round(score, 1)
        getBook.score = score
        getBook.save()
    except:
        return HttpResponse(404)

    try:
        user = request.user
        x = Collection.objects.filter(book=getBook, collector=user).count()
        x = x / x
        back["collected"] = True
    except:
        back["collected"] = False

    book = {
        "id": getBook.id,
        "bookname": getBook.bookname,
        "originName": getBook.originName,
        "introduction": getBook.introduction,
        "author": getBook.author,
        "authorInfo": getBook.authorInfo,
        "authorPhoto": getBook.authorPhoto.url,
        "translator": getBook.translator,
        "press": getBook.press,
        "pressTime": getBook.pressTime.year,
        "page": getBook.page,
        "price": getBook.price,
        "label": getBook.label,
        "cover": getBook.cover.url,
        "star": star,
        "score": score,
        "all": allScoreComment
    }
    back["book"] = book

    try:
        getComment = Comment.objects.filter(book=getBook).order_by("-createTime")
        result = dividePage(request.GET, getComment)
        if result['pass']:
            back['pageCount'] = result['pageCount']
            getComment = result['output']
            back['nowPage'] = result['index'] - 1
    except:
        getComment = None
    c = {}
    if getComment:
        i = 0
        for comment in getComment:
            details = {
                "username": comment.owner.name,
                "commentId": comment.id,
                "content": comment.content,
                "score": comment.score,
                "praise": comment.praise,
                "time": comment.createTime,
                "head": comment.owner.head_img.url,
            }
            i = i + 1
            c[str(i)] = details
    back["comment"] = c

    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            user = request.user
            try:
                logging.debug(user.name)
                score = form.cleaned_data["score"]
                logging.debug(score)
                content = form.cleaned_data["content"]
                newComment = Comment(book=getBook, owner=user, content=content, score=score)
                newComment.save()
            except:
                pass
        # 下面是点赞的
    form = CommentForm()
    back["form"] = form

    return render(request, "book_contain.html", back)


def book_collect(request, bookId):
    book = Book.objects.get(id=bookId)
    user = request.user
    try:
        x = Collection.objects.filter(book=book, collector=user).count()
        x = x / x
    except:
        Collection(book=book, collector=user).save()
    return HttpResponse('<script>window.location.href = document.referrer;</script>')


def book_uncollect(request, bookId):
    book = Book.objects.get(id=bookId)
    user = request.user
    Collection.objects.filter(book=book, collector=user).delete()
    logging.debug(user, book)
    return HttpResponse('<script>window.location.href = document.referrer;</script>')


def comment_delete(request, id):
    try:
        user = request.user
        comment = Comment.objects.get(id=id,owner=user)
        comment.delete()
        return HttpResponse("<script>window.location.href = document.referrer;</script>")
    except:
        return HttpResponse("<script>window.location.href = document.referrer;</script>")


def search(request, st):
    back = {
        "bookList": {},
        "labelOnTheTop": {},
        "pageCount": 1,
        "nowPage": 0,
    }

    allFLabel = FLabel.objects.all()
    labelSet = {}
    i = 0
    for label in allFLabel:
        i = i + 1
        labelSet[str(i)] = {
            "id": label.id,
            "name": label.labelName,
        }
    back["labelOnTheTop"] = labelSet

    s = ""
    try:
        s = st
    except:
        s = ""
    allBook = Book.objects.filter(Q(bookname__contains=s) | Q(author__contains=s))
    allBook = allBook.order_by('-score')
    i = 0
    bookList = {}
    for book in allBook:
        i = i + 1
        bookList[str(i)] = {
            "id": book.id,
            "bookname": book.bookname,
            "introduction": book.introduction,
            "author": book.author,
            "cover": book.cover.url,
            "press": book.press,
            "score": book.score,
        }
    result = dividePage(request.GET, bookList, 5)
    if result["pass"]:
        bookList = result['output']
        nowPage = result['index']

    back["bookList"] = bookList
    return render(request, "book_list.html", back)


def jump(request):
    try:
        s = request.GET['searchtxt']
        return redirect(reverse('search', args=(s,)))
    except:
        return HttpResponse(404)
# def twice_label_choice(request, fLabelNum):
#     sLabel = Label.objects.filter(labelNum__range=(fLabelNum*100+1,fLabelNum*100+100))
#     result = []
#     for i in sLabel:
#         # 对应的id和ip组成一个字典
#         result.append({'id': i.labelNum, 'name': i.labelName})
#     # 返回json数据
#     return HttpResponse(json.dumps(result), content_type="application/json")