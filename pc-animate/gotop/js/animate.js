//窗口scroll缓动
function animate(obj, target, callback) {
    clearInterval(obj.timer); // 运行前先清除已经在运行的定时器 避免同时多个定时器运行
    obj.timer = setInterval(function () { //避免了声明变量 占用内存 避免混淆
        if (window.pageYOffset == target) {
            clearInterval(obj.timer);
            callback&&callback(); //短路运算
        }
        var step =(target - window.pageYOffset) / 10; //计算逐渐减少的步长 实现缓动效果
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //如果为正数则向上取整 如果为负数则向下取整
        window.scroll(0,window.pageYOffset + step);
    }, 15);
}