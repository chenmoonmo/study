window.addEventListener("load",function() {
    var side = document.querySelector(".side");
        var nav = document.querySelector(".nav");
        var banner = document.querySelector(".banner");
        var goTop = document.querySelector(".top");
        document.addEventListener("scroll" , function () {
            if (window.pageYOffset > nav.clientHeight) {
               side.style.position = "fixed";
               side.style.top = "100px";
            }  else {
                side.style.position = "absolute";
               side.style.top = "100px";
            }
            if ( window.pageYOffset > nav.clientHeight + banner.clientHeight) {
                goTop.style.display = "block";
            } else {
                goTop.style.display = "none";
            }
        })
        goTop.addEventListener("click", function () {
            animate(window,0)
        })
})