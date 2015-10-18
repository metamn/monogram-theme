<section class="cube">
  <h3>Cube</h3>

  <div class="cube__wrap">
  	<div class="cube3d">
  		<div class="cube3d__face cube3d__face--front">
        {% set icon = icons[0] %}
        {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
      </div>
  		<div class="cube3d__face cube3d__face--back">
        {% set icon = icons[1] %}
        {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
      </div>
  		<div class="cube3d__face cube3d__face--top"></div>
  		<div class="cube3d__face cube3d__face--bottom"></div>
  		<div class="cube3d__face cube3d__face--left">
        {% set icon = icons[2] %}
        {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
      </div>
  		<div class="cube3d__face cube3d__face--right">
        {% set icon = icons[3] %}
        {% include '../../framework/structure/icomoon/icomoon.html.swig' %}
      </div>
  	</div>
  </div>
</sectipn>
