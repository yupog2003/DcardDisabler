var menu=document.getElementById("menu_collapse");
var dcard=menu.getElementsByTagName("a")[1];
//dcard.style.display = "none";
dcard.setAttribute('href', "#");
dcard.addEventListener("click", function(){
    if (confirm("你確定要抽卡嗎？") == true){
        document.location.href="https://www.dcard.tw/dcard";
    }
});
