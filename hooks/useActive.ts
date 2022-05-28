import { useState } from 'react'

export const useActive = () => {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(active)

  return [active, toggle]
}
