
images = {
   "1" : "img/placeholdervideo.PNG",
   "2" : "img/placeholdervideo.PNG",
   "3" : "img/placeholdervideo.PNG",
   "4" : "img/placeholdervideo.PNG",
   "5" : "img/placeholdervideo.PNG",
   "6" : "img/placeholdervideo.PNG",
   "7" : "img/placeholdervideo.PNG",
   "8" : "img/placeholdervideo.PNG",
   "9" : "img/placeholdervideo.PNG",
   "10" : "img/placeholdervideo.PNG"
}

Object.keys(images).forEach(function(path) {
    $('#hold_images').append("<img class='my_img' width=200 height=400 src=" + images[path] + ">");
});

$('body').append("<i id='icon_right'></i>");
$('body').append("<i id='icon_left'></i>");
// add_icon('#icon_right', 'chevron-right-solid.svg', '40px', 'white');
// add_icon('#icon_left', 'ui-icon-caret-1-e', '40px', 'white');

$(document).ready(function(){
    $('.my_img').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
});

$(document).on('click', '#icon_right, #icon_left', function() {
    if($(this).attr('id') == 'icon_right') {
        $('body').animate({scrollLeft: 1000}, 800);
        } else {
        $('body').animate({scrollLeft: -1000}, 800);
    }
});
