const authenticated = "Authenticated"

//登入
export function login(v){
    window.localStorage.setItem(authenticated,v)
}
//退出
export function logout(){
    window.localStorage.removeItem(authenticated)
}
//登入状态
export function isAuthenticated(){
    let item = window.localStorage.getItem(authenticated);
    return item !== null && item !== '' && item !== undefined
}