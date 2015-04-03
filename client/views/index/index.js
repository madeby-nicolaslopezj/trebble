Template.index.helpers({
    getIndexImage: function () {
        var images = orion.dictionary.get('indexImages');
        var image = images[Math.floor(Math.random()*images.length)];
        return image.item.url;
    },
    titlesIsArray: function() {
        return orion.dictionary.get('indexTitles').length > 1;
    }
});

Template.index.onRendered(function() {
	$(window).height();
    var b = $(window).width(), a = 0;
    $(window).resize(function() {
        b = $(window).width();
        $(window).height()
    });
    $(window).trigger("scroll");
    $(".centralized").centralized({
        delay: 1000,
        fadeSpeed: 500
    });
    
    "undefined" != typeof window.ontouchstart && $.each([".social-icons a", ".portfolio-items li", ".about-items .item"], function(b, a) {
        $(a).each(function(b, a) {
            $(a).bind("click", function(a) {
                $(this).hasClass("clickInNext") ? $(this).removeClass("clickInNext") : (a.preventDefault(), a.stopPropagation(), $(this).mouseover(),
                $(this).addClass("clickInNext"))
            })
        })
    });
    
    
    setTimeout(function(){
        $(".welcome-messages ul").bxSlider({
            mode: "vertical",
            auto: true,
            minSlides: 1,
            responsive: true,
            touchEnabled: true,
            pager: false,
            controls: false,
            useCSS: true,
            pause: 1E4
        });
    }, 1000);
})