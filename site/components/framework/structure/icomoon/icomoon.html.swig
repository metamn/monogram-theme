<div class="icomoon">
  {% if icon.url %}
    <a class="icomoon__link" href="{{ icon.url }}" title="{{ icon.title }}">
  {% endif %}

  <svg class="icomoon__icon icon-{{ icon.name }}"><use xlink:href="#icon-{{ icon.name }}"></use></svg>

  {% if icon.url %}</a>{% endif %}
</div>
