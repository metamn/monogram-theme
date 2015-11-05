<section class="cube">
  <h3>Cube</h3>

  <div class="cube__icons">
    {% for icon in icons %}
      <!-- Modify here -->
      <!-- Replace dummy data like <a href="{{ icon.url }}"> with your real data <a href="{{ icon.url }}<your-data>"> -->
      {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
    {% endfor %}
  </div>

  {# must be named Scene1 !! #}
  <embed class="cube__scene" width='500' height='500' name='Scene1' src="{{ site.url }}{{ site.images }}scene.svg" wmode='transparent' type='image/svg+xml' />
</section>
