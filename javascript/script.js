document.getElementById("header_right").addEventListener("click",function(){
        this.classList.toggle("border_open");
        document.getElementById("menu_contents").classList.toggle("menu_contents");
    });

    document.getElementById("menu_contents").addEventListener("click",function(){
        this.classList.remove("menu_contents");
        document.getElementById("header_right").classList.remove("border_open");
    });

    // スクロール値880でheader_rightにblack
    window.addEventListener("scroll",function(){
        const scroll = document.documentElement.scrollTop;
        if (scroll > 630) {
            document.getElementById("header_right").classList.add("header_right_color_480px");
        }else{
            document.getElementById("header_right").classList.remove("header_right_color_480px");
        }

        if (scroll > 1300) {
            document.getElementById("header_right").classList.add("header_right_color_1030px");
        }else{
            document.getElementById("header_right").classList.remove("header_right_color_1030px");
        }

        if (scroll > 990) {
            document.getElementById("header_right").classList.add("header_right_color_780px");
        }else{
            document.getElementById("header_right").classList.remove("header_right_color_780px");
        }

        if (scroll > 880) {
            document.getElementById("header_right").classList.add("header_right_color_normal");
        }else{
            document.getElementById("header_right").classList.remove("header_right_color_normal");
        }
    })