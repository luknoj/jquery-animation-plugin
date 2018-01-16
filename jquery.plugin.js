(function ( $ ) {
  $.fn.animate = function(config) {
    const options = $.extend(
    {
      duration: "3000",
      delay: "300",
      type: "fadeIn",
    }, 
    config
  );  
  
  this.each((index, group) => {
    $(group)
      .children()
      .each((index, element) => {
        $(element)
          .css("animation-delay", `${(options.delay / 1000) * index}s`)
          .css("animation-duration", `${options.duration / 1000}s`)
          .addClass(`animated ${options.type}`)
      });
    });
  };
})(jQuery);