$(document).ready(function(){

    $("div").click(function(){  //抓高度、寬長
        var ww=$(this).offset().left;
        var hh=$(this).offset().top;
        console.log(ww);
        console.log(hh);
    })

    // $(window).scroll(function () {
    //     var scrollVal = $(this).scrollTop();
    // });

    var h=$(window).height();//抓視窗高度
    var w=$(window).width();//抓視窗高度
    
    $(".top").css("height",h+"px"); 
    $(".top").css("width",w+"px"); 
    $(".title").css("height",h+"px"); 
    $(".title").parent().css("opacity",0); 
    $(".title").parent().animate({opacity:1},2000,function(){}); 

    function load(){
        $("#loading").removeClass("loading");
    }
    $(".aside a").click(function(){
        $("#loading").addClass("loading");
        setTimeout(load,400);
    })
    
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

    $("#all_por").click(function(){
        $(".all_por").hide();
        $(".all_por").fadeIn();
    });

    $("#f_por").click(function(){
        $(".all_por").hide();
        $(".f_por").fadeIn();
    });

    $("#b_por").click(function(){
        $(".all_por").hide();
        $(".b_por").fadeIn();
    });
    $("#d_por").click(function(){
        $(".all_por").hide();
        $(".d_por").fadeIn();
    });


});