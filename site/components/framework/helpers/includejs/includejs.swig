---
title: Include Javascripts
description: Include scripts into the source code
bug: async will be transfomed by | safe SWIG filter into async= so we will not use
---

{% macro includejs(scripts) -%}
  {% for script in scripts %}
    <script src="{{ site.url }}assets/scripts/{{ script.file }}"></script>
  {% endfor %}
{%- endmacro %}
