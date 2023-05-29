/**
 * @description 获取 http 状态消息
 * @param {number} status
 */
export function getHttpStatusMessage(status?: number | string) {
  switch (status) {
    case 401:
      return '用户没有权限（令牌、用户名、密码错误）！[status: 401]'
    case 403:
      return '用户得到授权，但是访问是被禁止的！[status: 403]'
    case 404:
      return '网络请求错误！[status: 404]'
    case 405:
      return '网络请求错误,请求方法未允许！[status: 405]'
    case 408:
      return '网络请求超时！[status: 408]'
    case 500:
      return '服务器错误,请联系管理员！[status: 500]'
    case 501:
      return '网络未实现！[status: 501]'
    case 502:
      return '网络错误！[status: 502]"'
    case 503:
      return '服务不可用，服务器暂时过载或维护！[status: 503]'
    case 504:
      return '网络超时！[status: 504]'
    case 505:
      return 'http版本不支持该请求！[status: 505]'
    default:
      return `未知错误！[错误码：990000]`
  }
}
