// 格式化对象(去除对象空属性)
export function formatObj(obj: { [key: string]: any }) {
  const newObj = obj

  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete newObj[key]
    }
  })

  return newObj
}
