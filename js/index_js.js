//點選list切換相對圖片
$("tr").click(function(){
    var index = $("tr").index(this);
    // alert(index);
    var img=['vote.JPG','calendar.JPG','animal.JPG','band.JPG','basic.JPG','en_ani.JPG','levelc.JPG'];
    // console.log("./img/pj/"+img[index]);
    $("#por_img").attr("src","./img/pj/"+img[index]);
});