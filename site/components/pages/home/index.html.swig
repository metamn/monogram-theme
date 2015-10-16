{% set avatar = avatars[0] %}

{% extends '../../project/templates/default/default.html.swig' %}
{% block content %}

  {% set icons = icons %}
  {% include '__avatar-and-icons/home__avatar-and-icons.html.swig' %}

{% endblock %}
