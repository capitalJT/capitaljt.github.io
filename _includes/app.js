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
</script>