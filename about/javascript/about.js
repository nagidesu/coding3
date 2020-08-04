document.getElementById("header_right").addEventListener("click",function(){
    this.classList.toggle("border_open");
    document.getElementById("menu_contents").classList.toggle("menu_contents");
});

document.getElementById("menu_contents").addEventListener("click",function(){
    this.classList.remove("menu_contents");
    document.getElementById("header_right").classList.remove("border_open");
});

// スクロールでheader_rightにblack
window.addEventListener("scroll",function(){
    const scroll = document.documentElement.scrollTop;
    if (scroll > 520) {
        document.getElementById("header_right").classList.add("header_right_color_480px");
    }else{
        document.getElementById("header_right").classList.remove("header_right_color_480px");
    }

    if (scroll > 790) {
        document.getElementById("header_right").classList.add("header_right_color_1030px");
    }else{
        document.getElementById("header_right").classList.remove("header_right_color_1030px");
    }

    if (scroll > 590) {
        document.getElementById("header_right").classList.add("header_right_color_780px");
    }else{
        document.getElementById("header_right").classList.remove("header_right_color_780px");
    }

    if (scroll > 680) {
        document.getElementById("header_right").classList.add("header_right_color_normal");
    }else{
        document.getElementById("header_right").classList.remove("header_right_color_normal");
    }
})