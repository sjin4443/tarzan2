
    $(document).on("mousedown", function (event) {
        console.log(event.pageX);
    
        $(".land-1").css("background-position-x", event.pageX / 2 - 400)
        $(".land-2").css("background-position-x", event.pageX / 5 - 400)
        $(".land-3").css("background-position-x", event.pageX / 8 - 400)
        $(".land-4").css("background-position-x", event.pageX / 10 - 400)
        
    }), ("mouseup", function (event) {
        console. log()
    })


    $(document).ready(function(){   
        $(".land-1").click(function(){
            $(".background_img").toggle();
        })
    })
