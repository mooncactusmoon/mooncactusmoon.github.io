$(document).ready(function(){
    var h=$(window).height();//抓視窗高度
    var w=$(window).width();//抓視窗高度
    
    $(".top").css("height",h+"px"); 
    $(".top").css("width",w+"px"); 
    $(".title").css("height",h+"px"); 
    $(".title").parent().css("opacity",0); 
    $(".title").parent().animate({opacity:1},2000,function(){}); 


    
    $(".aside").css("height",h+"px"); 
    // $(".aside").fadeOut();
    $(".aside,.close_b").hide();

    $(".open_b").mouseover(function(){
        $(this).find("i").removeClass("fa-bars").addClass("fa-arrow-left");
    })
    $(".open_b").mouseout(function(){
        $(this).find("i").removeClass("fa-arrow-right").addClass("fa-bars");
    })
    $(".open_b").click(function(){
        console.log("AA");
        $(".aside,.close_b").fadeIn();
        $(".open_b").hide;

    })
    $(".close_b").click(function(){
        console.log("AA");
        $(".aside,.close_b").fadeOut();
        $(".close_b").hide;

    })
});