<!-- Modify here -->
<!-- Below there are some sample icons linking nowhere -->
<!-- You can remove or add new ones -->
<!-- To add a new one copy-paste an existing "icomoon" entry and replace let's say "icon-twitter" with "icon-pinterest" -->
<!-- Do the replace twice, in <svg> and <use> -->

<article class="icons">
  <h3>Icons</h3>

  <div class="icons__row">
    {% for index, icon in icons %}
      <!-- Modify here -->
      <!-- Replace dummy data like <a href="{{ icon.url }}"> with your real data <a href="{{ icon.url }}<your-data>"> -->
      {% include '../../framework/structure/icomoon/icomoon.html.swig' %}

      {% if (index % 2 == 1) %}
        {% if (!loop.last) %}
          </div>
          <div class="icons__row">
        {% endif %}
      {% endif %}
    {% endfor %}
  </div>
</article>
