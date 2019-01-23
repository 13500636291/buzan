import axios from 'axios'
import qs from 'qs'

//设置axios为form-data
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.transformRequest = [function(data) { //在请求之前对data传参进行格式转换
    data = qs.stringify(data)
    return data
}]

// 登陆验证
export const loginPost = form => axios.post('api/v1/user/login', form).then(res => res)