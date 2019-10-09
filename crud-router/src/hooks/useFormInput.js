import { useState } from 'react'

// De cada input captura su valor y cambia su state inicial
export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleChange = e => setValue(e.target.value)

  return { value, onChange: handleChange }
}
