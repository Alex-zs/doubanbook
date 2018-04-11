from django.apps import AppConfig
import os

default_app_config = 'book.BookConfig'

VERBOSE_APP_NAME = r"图书管理"


def get_current_app_name(_file):
    return os.path.split(os.path.dirname(_file))[-1]


class BookConfig(AppConfig):
    name = get_current_app_name(__file__)
    verbose_name = VERBOSE_APP_NAME
