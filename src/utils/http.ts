/**
 * 添加拦截器：
 *    拦截 request 请求
 *    拦截 uploadFile 文件上传
 *
 * TODO：
 *   1. 非 http 开头徐拼接地址
 *   2. 请求超时
 *   3. 添加小程序请求头标识
 *   4. 添加 token 请求头标识
 */

import { useMemberStore } from '@/stores'

const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截器触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非http开头拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 2. 请求超时，默认10s
    options.timeout = 10000
    // 3. 添加小程序请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    console.log('token', token)

    if (token) {
      options.header.Authorization = token
    }

    console.log(options)
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
