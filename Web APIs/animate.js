//缓动效果动画 obj为调用元素 targat为最终距离 callback为回调函数
function animate(obj, target, callback) {
    clearInterval(obj.timer); // 运行前先清除已经在运行的定时器 避免同时多个定时器运行
    obj.timer = setInterval(function () { //避免了声明变量 占用内存 避免混淆
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback) {
                callback();
            }
        }
        var step =(target - obj.offsetLeft) / 10; //计算逐渐减少的步长 实现缓动效果
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //如果为正数则向上取整 如果为负数则向下取整
        obj.style.left =obj.offsetLeft + step + "px";
    }, 15);
}