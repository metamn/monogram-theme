{% set avatar = avatars[0] %}

{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set name = avatar.name %}
  {% include '../../project/monogram/monogram.html.swig' %}

  {% set icons = iconshexa %}
  {% include '../../project/icons/icons.html.swig' %}
{% endblock %}
