;(function(){
  document.addEventListener("click", function(event) {
    var url = location.href.slice(0, location.href.length - location.hash.length);
    var targetHref = event.target.href || "";
    if (targetHref.slice(0, url.length) === url && targetHref[url.length] === "#") {
      event.preventDefault();
      var hash = targetHref.slice(url.length + 1);
      var element = document.getElementById(hash);
      if (element) {
        var scrollTo = element.getBoundingClientRect().top;
        smorthScrollTo(scrollTo);
      }
    }
  });

  function smorthScrollTo(to) {
    var newScrollY = window.scrollY;
    var loop = function() {
      newScrollY += (to - newScrollY) / 12;

      if (Math.abs(newScrollY - to) <= 1) {
        newScrollY = to;
      } else {
        requestAnimationFrame(loop);
      }
      window.scrollTo(window.scrollX, newScrollY);
    };

    loop();
  };
})();
