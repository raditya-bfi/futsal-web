import { useEffect, useState } from 'react'

const useCustom = () => {
  const [locale, setLocale] = useState({
    date: new Date().toLocaleDateString('id', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
    weekday: new Date().toLocaleDateString('id', {
      weekday: 'long',
    }),
    time: new Date().toLocaleTimeString('id', {
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h24',
    }),
  })

  useEffect(() => {
    const itv = setInterval(() => {
      setLocale({
        date: new Date().toLocaleDateString('id', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        weekday: new Date().toLocaleDateString('id', {
          weekday: 'long',
        }),
        time: new Date().toLocaleTimeString('id', {
          hour: '2-digit',
          minute: '2-digit',
          hourCycle: 'h24',
        }),
      })
    }, 1000)
    return () => clearInterval(itv)
  }, [])

  return {
    state: {
      locale,
    },
  }
}

export default useCustom
