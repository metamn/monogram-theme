<section class="cube">
  <h3>Cube</h3>

  <div class="cube__wrap">
  	<div class="cube3d">
      {% set faces = ['front', 'back', 'top', 'bottom', 'left', 'right'] %}
      {% for index, face in faces %}
        <div class="cube3d__face cube3d__face--{{ face }}">
          {% if icons[index] %}
            {% set icon = icons[index] %}
            {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
          {% endif %}
        </div>
      {% endfor %}
  	</div>
  </div>
</sectipn>
