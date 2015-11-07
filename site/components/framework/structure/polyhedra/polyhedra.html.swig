<aside class="polyhedra">
  <h3>Polyhedra</h3>

  {% if polyhedra.length <= 4 %}
    {% include 'polyhedron/--tetrahedron/polyhedron--tetrahedron.html.swig' %}
  {% elseif polyhedra.length <= 6 %}
    {% include 'polyhedron/--hexahedron/polyhedron--hexahedron.html.swig' %}
  {% endif %}

</aside>
