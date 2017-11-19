$('#scrollPanel a').click(function(e){var str=$(this).attr('href');$.scrollTo(str,500,{easing:'linear'});return false;});
$(document).ready(function(){$("#selectMenu ul li a").click(function(e) {e.preventDefault();$("#selectMenu ul li a").removeClass('active');$(this).addClass('active');})});
$(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
      jQuery('#back-top a').fadeIn();
    } else {
      jQuery('#back-top a').fadeOut();
    }
  });  
        $('#back-top a').click(function () {        
        $('body,html').stop(false, false).animate({
                scrollTop: 0
        }, 500);
        return false;
        });	
// Cache selectors
var lastId,
topMenu = $("#menu_nav"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems.parent().removeClass("active")
            .end().filter("[href=#" + id + "]").parent().addClass("active");
    }
});