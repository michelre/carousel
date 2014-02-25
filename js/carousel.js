var Carousel = function(width, height) {
    var self = this;
    
    self.position = 0;
    self.width = width;
    self.height = height;
    self.li = $("#carousel-wrapper li");

    self.init = function() {        
        $("#carousel-wrapper").prepend("<a href='#' class='slide-left'><span class='chevron-left'></span></a>");
        $("#carousel-wrapper").append("<a href='#' class='slide-right'><span class='chevron-right'></span></a>");

        $("#carousel-wrapper").css({"width": self.width});
        $("#carousel-wrapper").css({"height": self.height});
        $("#carousel-wrapper ul").css({"width": self.li.length * (self.width) + 50});
        $("#carousel-wrapper ul li").css({"width": self.width});
        
        self.slideLeftEvent();
        self.slideRightEvent();
    };

    self.slideLeftEvent = function() {
        $("#carousel-wrapper a.slide-left").on("click", function(e) {
            e.preventDefault();
            ((self.position - 1) >= 0) ? self.position-- : self.position = self.li.length - 1;
            $("#carousel-wrapper ul").css({"transform": "translateX(" + self.position * (-self.width) + "px)"});
        });
    };

    self.slideRightEvent = function() {        
        $("#carousel-wrapper a.slide-right").on("click", function(e) {
            e.preventDefault();
            ((self.position + 1) < self.li.length) ? self.position++ : self.position = 0;
            $("#carousel-wrapper ul").css({"transform": "translateX(" + self.position * (-self.width) + "px)"});
        });
    };
    
    self.init();
};