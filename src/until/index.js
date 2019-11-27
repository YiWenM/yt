/**
 * 获取请求前缀
 * @returns {string}
*/
import moment from 'moment'
moment.locale('zh-cn')

export const getBaseUrl = () => {
  const domain = window.document.domain
  let baseUrl = ''

  switch (domain) {
    case 'localhost':
      baseUrl = '/api'
      break
    case '192.168.1.173':
      baseUrl = 'http://192.168.1.173:4018'
      break
    case 'cqg.utonw.com':
      baseUrl = 'http://cqsg.utonw.com'
      break
    default:
      baseUrl = 'http://cqs.utonw.com'
  }

  return baseUrl
}

/**
 * 保留小数
 * @param num 要保留的数字
 * @param digit 位数
 * @returns {number}
 */
export const toFixed = (num, digit = 2) => {
  if (!num) return 0
  let n = Math.pow(10, digit)
  return strip(Math.floor(strip(num * n)) / n)
}

/**
 * 精度计算
 * @param num 需要进行精度计算的数值
 * @param precision 精度值
 * @return {number}
*/
export const strip = (num, precision = 12) => {
  return +parseFloat(num.toPrecision(precision))
}

/**
 * 日期格式化
 * @param value 初始日期值
 * @param params 对应传入参数
 * @return {string|number}
*/
export const dateFormatter = (value, ...params) => {
  const date = value
  const format = (params.length && params.shift()) || ''

  if (!moment(date).isValid()) return ''

  if (!(format && typeof format === 'string')) return moment(date).format('YYYY-MM-DD HH:mm:ss')

  return moment(date).format(format)
}


/**
 * 弹出框可以滑动
*/
export const canScroll = () => {
  let mo = function (e) {
    e.preventDefault()
  }
  document.body.style.overflow = '' // 出现滚动条
  document.removeEventListener('touchmove', mo, false)
}

/**
 * 弹出框禁止滑动
*/
export const noScroll = () => {
  let mo = function (e) {
    e.preventDefault()
  }

  document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, false) // 禁止页面滚动
}
