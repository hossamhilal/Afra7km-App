$(document).ready(function () {

    // Start Loader

    $(window).load(function () {

        $("body").css("overflow-y", "auto");

        $(".loader").fadeOut();

        $(".loading").fadeOut().css({
            'transituin-delay' : '1s'
        });

    });

    // Start Forget Popup

    $(".forget").click(function(e){
        $(".forget-password").css({
            "transform" : "translateY(0) scaleY(1)"
        });

        $(".forget-password .form-control").focus();

        $(".overlay").fadeIn();

        $(".menu").removeClass("open");
        e.preventDefault();
    });

    $(".overlay").click(function(){
        $(this).fadeOut();
        $(".forget-password").removeAttr("style");

        $(".menu").removeClass("open");
    });

    // Start Menu

    $(".fa-ellipsis-v").click(function () {
       $(".overlay").fadeIn();

       $(".menu").addClass("open");
    });

    

    // Start Uploader 

    // ADD IMAGE
    $('.image-uploader').change(function (event) {
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><button class="close">&times;</button></div>');
    });

    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close', function () {
        $(this).parents('.uploaded-block').remove();
    });


    // switching from grid to list in products
    $(".products .list").on("click", function () {
         $(".product-holder").removeClass("grid");
    });
    $(".products .grid").on("click", function () {
        $(".product-holder").addClass("grid");
    });



    // Activating the star-rating script ///////************

    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
        var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

        // Now highlight all the stars that's not after the current hovered star
        $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
                $(this).addClass('hover');
            }
            else {
                $(this).removeClass('hover');
            }
        });

    }).on('mouseout', function(){
        $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
        });
    });

    /* 2. Action to perform on click */
    $('#stars li').on('click', function(){

        var i;
        var onStar = parseInt($(this).data('value'), 10); // The star currently selected
        var stars = $(this).parent().children('li.star');

        for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
        }

        for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
        }
    });
    
});