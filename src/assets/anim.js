// 如果不想使用，通过引用来进行取消
// 样式动画官网: https://animate.style/

// 动画启动样式 - 如果不需要动画  defaultAnimClass = '' 即可
const defaultAnimClass = 'animate__animated'
const animClass = defaultAnimClass+" "
// 动画样式
export const animZoomIn =  animClass+'animate__zoomIn'
export const animBounce = animClass+'animate__bounce'
export const animBounceIn = animClass+'animate__bounceIn'
export const animBounceInUp = animClass+'animate__bounceInUp'
export const animBounceInDown = animClass+'animate__bounceInDown'
export const animateBackInRight = animClass+'animate__backInRight'


// 弹跳动画,参数必须是: $event , 用法 onAnimBounce($event)
// 如何关闭,注释方法里面的所有内容即可
export const onAnimBounce = (v) => {
    let classList = [defaultAnimClass,"animate__bounce"]
    let element = v.currentTarget
    element.classList.add(classList[0],classList[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(classList[0],classList[1]);
    });
}

export const onAnimFadeInLeft = (v) => {
    let classList = [defaultAnimClass,"animate__fadeInLeft"]
    let element = v.currentTarget
    element.classList.add(classList[0],classList[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(classList[0],classList[1]);
    });
}

// 退出下降动画,f回调方法
export const onAnimBackOutDown = (v,f) => {
    let classList = [defaultAnimClass,"animate__backOutDown"]
    let element = v.currentTarget
    element.classList.add(classList[0],classList[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(classList[0],classList[1]);
        f()
    });
}
