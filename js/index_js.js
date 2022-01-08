//點選list切換相對圖片
$("tr").click(function(){
    $("tr").removeClass();
    $(this).addClass("tr_show");
    var index = $("tr").index(this);
    // alert(index);
    var img=['vote','calendar','animal','band','basic','en_ani','levelc'];
    // console.log("./img/pj/"+img[index]);
    $("#por_img").attr("src","./img/pj/"+img[index]+".JPG").attr("alt",img[index]);


    
});

$("#por_img").click(function(){
   $("#myModal").find("p").empty().append("HAAAA");
})