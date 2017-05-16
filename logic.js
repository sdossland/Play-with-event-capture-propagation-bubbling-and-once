/**
 * Created by sophia on 5/16/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const rectangles = document.querySelectorAll('.rectangle');

  function emphasis(e) {
    console.log();
  }

  rectangles.forEach(rectangle =>
    rectangle.addEventListener('click', emphasis)
  )

});