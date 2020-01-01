(function($){$.fn.bcSwipe=function(settings){var config={threshold:50};if(settings){$.extend(config,settings)}
this.each(function(){var stillMoving=!1;var start;if('ontouchstart' in document.documentElement){this.addEventListener('touchstart',onTouchStart,!1)}
function onTouchStart(e){if(e.touches.length==1){start=e.touches[0].pageX;stillMoving=!0;this.addEventListener('touchmove',onTouchMove,!1)}}
function onTouchMove(e){if(stillMoving){var x=e.touches[0].pageX;var difference=start-x;if(Math.abs(difference)>=config.threshold){cancelTouch();if(isCarouselEmpty($(this)))return;if(difference>0){$(this).carousel('next')}
else{$(this).carousel('prev')}}}}
function isCarouselEmpty(carousel){return carousel.find(".item.active").length<1}
function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);start=null;stillMoving=!1}});return this}})(jQuery)
