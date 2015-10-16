@mixin figure--loading {
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #000;
  background-image: url("{{ site.url }}{{ site.images }}spinner.svg");

  &--loaded {
    background: transparent;
    background-image: none;
  }
}
