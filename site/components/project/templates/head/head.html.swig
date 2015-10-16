{% import "../../../framework/helpers/classname/classname.swig" as c  %}
{% set classname = c.classname(title) %}

{% import "../../../framework/helpers/includejs/includejs.swig" as j  %}
{% set scripts = j.includejs(site.javascripts.header) %}

<!doctype html>
<html lang="en" class="{{ classname }} {{ klass }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <title>{{ avatar.name }} - {{ avatar.role }}</title>
    <link href="{{ site.url }}assets/styles/site.css" media="screen, projection" rel="stylesheet" type="text/css" />

    {{ scripts | safe }}

    {# include '__icons/head__icons.html.swig' #}
  </head>

  <body>
    {% include '__icomoon/head__icomoon.html.swig' %}
