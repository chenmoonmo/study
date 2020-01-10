window.addEventListener("load", function () {
    var nav = document.querySelector(".nav");
    var cloud = document.querySelector(".cloud");
    var num = 0;
    for(var i = 0; i < nav.children.length; i++) {
        nav.children[i].addEventListener("mouseenter", function () {
            animate(cloud,this.offsetLeft);
            // cloud.style.left  = this.offsetLeft + "px";
        })
        nav.children[i].addEventListener("click", function () {
            num = this.offsetLeft;
        })
        nav.children[i].addEventListener("mouseleave", function () {
            //cloud.style.left = num + "px";
            animate(cloud,num);
        })
    }
})