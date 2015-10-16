<div class="icon">
  {% if icon.url %}
    <a class="icon__link" href="{{ icon.url }}" title="{{ icon.title }}">
  {% endif %}

  <img class="icon__image" src="{{ site.url }}{{ site.images }}{{ icon.name }}.svg" alt="{{ icon.title }}">

  {% if icon.url %}</a>{% endif %}
</div>
