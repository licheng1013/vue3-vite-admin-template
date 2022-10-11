// 如果不想使用，通过引用来进行取消
// 样式动画官网: https://animate.style/

// 动画启动样式 - 如果不需要动画  defaultAnimClass = '' 即可
const defaultAnimClass = 'animate__animated'
const animClass = defaultAnimClass+" "
export const bounceInDownList = [defaultAnimClass,"animate__bounceInDown"]
export const bounceInUpList = [defaultAnimClass,"animate__bounceInUp"]
export const bounceOutDownList = [defaultAnimClass,"animate__bounceOutDown"]

// 动画样式
export const animZoomIn =  animClass+'animate__zoomIn'
export const animBounce = animClass+'animate__bounce'
export const animBounceIn = animClass+'animate__bounceIn'
export const animBounceInUp = animClass+bounceInUpList[1]
export const animBounceInDown = animClass+bounceInDownList[1]
export const animateBackInRight = animClass+'animate__backInRight'


// 弹跳动画,参数必须是: $event , 用法 onAnimBounce($event)
// 如何关闭,注释方法里面的所有内容即可
export const onAnimBounce = (v) => {
    let classList = [defaultAnimClass,"animate__bounce"]
    onAnim(v,classList)
}
export const onAnimFadeInLeft = (v) => {
    let classList = [defaultAnimClass,"animate__fadeInLeft"]
    onAnim(v,classList)
}
const onAnim = (v,list)=>{
    onAnimMethod(v,list,()=>{})
}
const onAnimMethod = (v,list,method)=>{
    let element = v.currentTarget
    element.classList.add(list[0],list[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(list[0],list[1]);
        //执行方法
        method()
    });
}

// 退出下降动画,f回调方法
export const onAnimBackOutDown = (v,f) => {
    let classList = [defaultAnimClass,"animate__backOutDown"]
    onAnimMethod(v,classList,f)
}
export const onAnimBounceInDown = (v,f)=>{
    let classList = [defaultAnimClass,"animate__bounceInDown"]
    onAnimMethod(v,classList,f)
}

// 根据css标签来渲染动画
export const onCssAnim = (css,list,f)=>{
    let element = document.querySelector(css)
    element.classList.add(list[0], list[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(list[0],list[1]);
        f()
    });
}

