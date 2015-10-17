<!-- Modify here -->
<!-- Below there are some sample icons linking nowhere -->
<!-- You can remove or add new ones -->
<!-- To add a new one copy-paste an existing "icomoon" entry and replace let's say "icon-twitter" with "icon-pinterest" -->
<!-- Do the replace twice, in <svg> and <use> -->

<article class="icons">
  <h3>Icons</h3>

  {% for icon in icons %}
    <!-- Modify here -->
    <!-- Replace dummy data like <a href="http://twitter.com"> with your real data <a href="http://twitter.com/metamn"> -->
    {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
  {% endfor %}
</article>
