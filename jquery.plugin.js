(function ( $ ) {
  $.fn.animate = function(config) {
    var options = $.extend({
      duration: "3000",
      delay: "300",
      type: "fadeIn",
    }, config);  
    for(let i = 0; i < this.length ; i++){
    $(this[i]).children().each((index, element) => {
      $(element)
      .css("animation-delay", `${(options.delay/1000)*index}s`)
      .css("animation-duration", `${options.duration/1000}s` )
      .addClass(`animated ${options.type}`)
      .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        this.removeClass(`animated ${options.type}`);
      });
    })
  }
}
}(jQuery));