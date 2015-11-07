<aside class="polyhedra">
  <h3>Polyhedra</h3>

  {% if polyhedra.length <= 4 %}
    {% include 'polyhedron/--tetrahedron/polyhedron--tetrahedron.html.swig' %}
  {% elseif polyhedra.length <= 6 %}
    {% include 'polyhedron/--hexahedron/polyhedron--hexahedron.html.swig' %}
  {% elseif polyhedra.length <= 8 %}
    {% include 'polyhedron/--octahedron/polyhedron--octahedron.html.swig' %}
  {% elseif polyhedra.length <= 12 %}
    {% include 'polyhedron/--dodecahedron/polyhedron--dodecahedron.html.swig' %}
  {% elseif polyhedra.length <= 20 %}
    {% include 'polyhedron/--icosahedron/polyhedron--icosahedron.html.swig' %}
  {% endif %}

</aside>
