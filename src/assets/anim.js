// 如果不想使用，通过引用来进行取消
// 样式动画官网: https://animate.style/

// 动画启动样式 - 如果不需要动画  defaultAnimClass = '' 即可
const defaultAnimClass = 'animate__animated '
// 动画样式
export const animZoomIn =  defaultAnimClass+'animate__zoomIn'
export const animBounceIn = defaultAnimClass+'animate__bounceIn'
export const animBounceInUp = defaultAnimClass+'animate__bounceInUp'
export const animBounceInDown = defaultAnimClass+'animate__bounceInDown'


// 弹跳动画,参数必须是: $event , 用法 onAnimBounce($event)
// 如何关闭,注释方法里面的所有内容即可
export const onAnimBounce = (v) => {
    let classList = ["animate__animated","animate__bounce"]
    let element = v.currentTarget
    element.classList.add(classList[0],classList[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(classList[0],classList[1]);
    });
}

export const onAnimFadeInLeft = (v) => {
    let classList = ["animate__animated","animate__fadeInLeft"]
    let element = v.currentTarget
    element.classList.add(classList[0],classList[1]);
    element.addEventListener('animationend', () => {
        element.classList.remove(classList[0],classList[1]);
    });
}