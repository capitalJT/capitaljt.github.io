<script type="text/javascript">
    "use strict";
    $(document).ready(function(){
        console.log("Yolo Bitches");
        //$(".menu-icon").hover(
        //    function(){
        //        console.log("mouse in");
        //        $(".site-menu").addClass("isActive");
        //    }, function(){
        //        console.log("mouse in");
        //        $(".site-menu").removeClass("isActive");
        //    }
        //);
        $(".menu-icon").click(function() {
            $(".site-menu").toggleClass("isOpen");
            console.log("clicked", this);
        });
    });


if($(".work").length){
    $.getJSON('https://gist.githubusercontent.com/capitalJT/d2f99864e580533b0c99/raw/86df6a4c51445d285e719a4db7287e118cd35b43/jt-data.json', function(data) {
        var items = [];
        $.each(data, function(idx, obj){
            $.each(obj, function(key, value){

                // check for external link
                var aTarget = null;
                if (value.extLink == true){
                    aTarget = 'target="_blank"';
                } else {
                    aTarget = "";
                }

                // var clientName = value.client;
                var description = value.description;
                var role = value.role;
                var imgSrc = value.imgSrc;
                var linkHref = value.linkHref;

                var output = "<li><a href='"+ linkHref +"'"+ aTarget +"><div class=\"text\"><h3>" + description +"</h3><span class=\"role\">"+ role +"</span></div><img src='"+ imgSrc +"'><span class=\"overlay\"></span></a></li>";

                items.push( output );

            });
        });

        $( "<ul/>", { "class": "thumbnail-list", html: items }).appendTo( ".work" );
    });
}
</script>