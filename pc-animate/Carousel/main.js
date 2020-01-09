window.addEventListener("load", function () {
    var container = document.querySelector(".container");
    var imgs = document.querySelector(".img-con");
    var turnleft = document.querySelector(".turnleft");
    var turnright = document.querySelector(".turnright");
    var btns = document.querySelector(".btns");
    var conWidth = container.offsetWidth;
    //动态生成和图片数量一致的小圆
    for (var i = 0; i < imgs.children.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("index", i);
        btns.appendChild(li);
        //li排他思想
        li.addEventListener("click", function () {
            for (var i = 0; i < btns.children.length; i++) {
                btns.children[i].className = "";
            }
            this.className = "current";
            //点击小圆 移动图片
            //移动距离 小圆的索引号乘以图片的宽度
            var index = this.getAttribute("index");
            num = circle = index;
            animate(imgs, -index * conWidth)
        })
    }

    btns.children[0].className = "current";
    //图片经过/离开 显示/隐藏切换轮播图按钮
    container.addEventListener("mouseenter", function () {
        turnleft.style.display = "block";
        turnright.style.display = "block";
        clearInterval(timer);
        timer = null;
    })
    container.addEventListener("mouseleave", function () {
        turnleft.style.display = "none";
        turnright.style.display = "none";
        timer = setInterval(function () {
            turnright.click();
        }, 2000);

    })

    //克隆第一张图 实现无缝滚动
    var first = imgs.children[0].cloneNode(true);
    imgs.appendChild(first);
    //节流阀 控制点击播放速度
    var flag = true;
    //点击右侧按钮 图片轮播
    var num = 0; //控制图片滚动的变量
    var circle = 0; //控制小圆类的变化的变量
    turnright.addEventListener("click", function () {
       if( flag) {
           flag = false; //关闭节流阀 
            //无缝滚动
        if (num == imgs.children.length - 1) {
            imgs.style.left = "0";
            num = 0;
        }
        num++;
        animate(imgs, -num * conWidth,function () {
            flag = true; //打开节流阀
        });
        circle++;
        /* if(circle == btns.children.length) {
            circle =0
        } */
        circle = circle == btns.children.length ? 0 : circle;
        circleChange();
       }
    })
    //左侧按钮
    turnleft.addEventListener("click", function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = imgs.children.length - 1;
                imgs.style.left = -num * conWidth + "px";
            }
            num--;
            animate(imgs, -num * conWidth,function () {
                flag = true;
            });
            circle--;
            /* if(circle < 0) {
                circle =btns.children.length - 1;
            } */
            circle = circle < 0 ? btns.children.length - 1 : circle;
            circleChange();
        }
    })

    function circleChange() {
        for (i = 0; i < btns.children.length; i++) {
            btns.children[i].className = "";
        }
        btns.children[circle].className = "current";
    }
    //自动播放
    var timer = setInterval(function () {
        turnright.click();
    }, 2000);

})