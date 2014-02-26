angular.module("carouselDirective", []).directive('ngCarousel', function() {
    return function link(scope, element, attrs) {

        var position = 0;
        var li = $(element).find("li");
        var width, height;

        scope.$watch(attrs.ngCarousel, function(value) {
            setWidthAttribute(value.width);
            setHeightAttribute(value.height);
            setCarousel();
        });
        
        function setWidthAttribute(widthAttr){
            var widthAttrSplit = widthAttr.split(/(px|%)$/);
            switch (widthAttrSplit[1]) {
                case "%":
                    width = $(element).parent().width();
                    break;
                default:
                    width = widthAttrSplit[0];
                    break;
            }
        };
        
        function setHeightAttribute(heightAttr){
            var heightAttrSplit = heightAttr.split(/(px|%)$/);
            switch (heightAttrSplit[1]) {
                case "%":
                    height = $(element).parent().width();
                    break;
                default:
                    height = heightAttrSplit[0];
                    break;
            }
        }

        function setCarousel() {
            $(element).prepend("<a href='#' class='slide-left'><span class='chevron-left'></span></a>");
            $(element).append("<a href='#' class='slide-right'><span class='chevron-right'></span></a>");

            $(element).css({"width": width});
            $(element).css({"height": height});
            $(element).find("ul").css({"width": li.length * (width) + 50});
            $(element).find("ul li").css({"width": width});            


            $(element).on("click", "a.slide-left", function(e) {
                e.preventDefault();
                ((position - 1) >= 0) ? position-- : position = li.length - 1;
                $(element).find("ul").css({"transform": "translateX(" + position * (-width) + "px)"});
            });

            $(element).on("click", "a.slide-right", function(e) {
                e.preventDefault();
                ((position + 1) < li.length) ? position++ : position = 0;
                $(element).find("ul").css({"transform": "translateX(" + position * (-width) + "px)"});
            });
        }
        ;

    };
});