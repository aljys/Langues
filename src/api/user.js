import request from '@/utils/request'
//登录 获取用户信息
export function login (params){
    return request({
        url:'/user.json',
        methods:'get',
        data:params
    })
}
