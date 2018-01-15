(function($){
  let elements;
  $.fn.animate = function(config) {
    var options = $.extend({
      duration: "3000",
      delay: "300",
      type: "fadeIn",
    },
  config
  );  
  elements = this.children();
  elements.each((index, element) => {
      $(element)
      .css("animation-delay", `${(options.delay/1000)*index}s` )
      .css("animation-duration", `${options.duration/1000}s` )
      .addClass(`animated ${options.type}`)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        $(element).removeClass(`animated ${options.type}`);
      });
    })
  };
})(jQuery);