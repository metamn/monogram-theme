{% set avatar = avatars[0] %}

{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% include '../../project/map/map.html.swig' %}

  {% set name = avatar.name %}
  {% include '../../project/monogram/monogram.html.swig' %}

  {% set icons = icons %}
  {% include '../../project/icons/icons.html.swig' %}
{% endblock %}
