__version__ = '0.2.1'
from django.apps import AppConfig
import os

default_app_config = 'users.UsersConfig'

VERBOSE_APP_NAME = u"用户管理"

def get_current_app_name(_file):
	return os.path.split(os.path.dirname(_file))[-1]

class UsersConfig(AppConfig):
	name = get_current_app_name(__file__)
	verbose_name = VERBOSE_APP_NAME