
$(document).ready(function(){

    // $(".aside").fadeOut();
    $(".aside,.b2").hide();

    $(".b1").click(function(){
        console.log("AA");
        $(".aside,.b2").fadeIn();
        $(".b1").hide;

    })
    $(".b2").click(function(){
        console.log("AA");
        $(".aside,.b2").fadeOut();
        $(".b2").hide;

    })
});