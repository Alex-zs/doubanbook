from django import template
import logging

register = template.Library()


@register.filter
def key(dic, key_name):
    # logging.debug(dict)
    # logging.debug(key_name)
    return dic[key_name]


@register.filter
def get_labelname(label):
    return label.labelName


@register.filter
def get_items(dic):
    return dic.items()
