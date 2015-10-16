{% if pictogram.icon %}
  <div class="pictogram__icon">
    {% set icon = { name: pictogram.icon, title: pictogram.icon } %}
    {% include '../../../../structure/icon/icon.html.swig' %}
  </div>
{% endif %}
