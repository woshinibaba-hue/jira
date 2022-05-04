import { useState, useEffect } from 'react'

// 节流函数
export function useDebounce<T>(value: T, delay = 200) {
  // 将传递的value使用useState进行包裹
  const [debouncedValue, setDebouncedValue] = useState(value)

  // 在useEffect中使用定时器来设置debouncedValue的值，当前useEffect在debouncedValue改变后执行
  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // 在返回时，清除定时器
    return () => clearTimeout(time)
  }, [value])

  return debouncedValue
}
