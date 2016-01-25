;
(function() {
  window.addEventListener('load', function() {
    var slideNumberChecked = 1;
    var timerId = setInterval(function() {
      slideNumberChecked > 2 ? slideNumberChecked = 1 : slideNumberChecked++;
      var inpCheck = document.getElementById('slide' + slideNumberChecked);
      inpCheck.checked = true;
    }, 3500);

    var review = document.getElementById('reviews');
    var input = document.querySelectorAll("input[name='slides']");
    for (var i = 0; i < input.length; i++) {
      input[i].addEventListener("click", function(event) {
        clearInterval(timerId);
        var target = +event.target.id[5];
        if (target < slideNumberChecked && !(slideNumberChecked == 3 && target == 1) || (slideNumberChecked == 1 && +event.target.id[5] == 3)) {
          review.classList.add('left');
        } else {
          review.classList.remove('left');
        }
        slideNumberChecked = target;
      });
    }
  });
})();
