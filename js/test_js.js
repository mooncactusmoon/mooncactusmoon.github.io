$(document).ready(function(){
    var h=$(window).height();//抓視窗高度
    $(".aside").css("height",h+"px"); 
    // $(".aside").fadeOut();
    $(".aside,.close_b").hide();

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