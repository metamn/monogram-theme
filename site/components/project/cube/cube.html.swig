<!-- Modify here -->
<!-- Below there are some sample icons linking nowhere -->
<!-- You can remove or add new ones -->
<!-- To add a new one copy-paste an existing "icomoon" entry and replace let's say "icon-twitter" with "icon-pinterest" -->
<!-- Do the replace twice, in <svg> and <use> -->

<section class="cube">
  <h3>Cube</h3>

  <div class="cube__wrap">
  	<div class="cube3d">
      {% set faces = ['front', 'back', 'top', 'bottom', 'left', 'right'] %}
      {% for index, face in faces %}
        <div class="cube3d__face cube3d__face--{{ face }}">
          {% if icons[index] %}
            <!-- Modify here -->
            <!-- Replace dummy data like <a href="{{ icon.url }}"> with your real data <a href="{{ icon.url }}<your-data>"> -->
            {% set icon = icons[index] %}
            {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
          {% endif %}
        </div>
      {% endfor %}
  	</div>
  </div>
</sectipn>
