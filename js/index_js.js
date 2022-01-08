var img=['vote','calendar','animal','band','basic','en_ani','levelc'];
//點選list切換相對圖片
$("tr").click(function(){
    $("tr").removeClass();
    $(this).addClass("tr_show");
    var index = $("tr").index(this);
    // alert(index);
    // console.log("./img/pj/"+img[index]);
    $("#por_img").attr("src","./img/pj/"+img[index]+".JPG").attr("alt",img[index]);
});

//彈跳Modal
$("#por_img").click(function(){
    var tt=$(this).attr("alt");
    console.log(tt);
    switch(tt){
        case "vote":
            $("#myModal").find("p").empty().append("vote");
        break;
        case "calendar":
            $("#myModal").find("p").empty().append("calendar");
        break;
        case "animal":
            $("#myModal").find("p").empty().append("animal");
        break;
        case "band":
            $("#myModal").find("p").empty().append("band");
        break;
        case "basic":
            $("#myModal").find("p").empty().append("basic");
        break;
        case "en_ani":
            $("#myModal").find("p").empty().append("en_ani");
        break;
        case "levelc":
            $("#myModal").find("p").empty().append("levelc");
        break;
    }
})