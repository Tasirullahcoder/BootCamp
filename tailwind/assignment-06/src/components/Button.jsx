import React from 'react'

const Button = ({ text, borderColor, textColor }) => {
  return (
    <button
      className={`w-50 h-10 rounded-lg border ${
        borderColor ? borderColor : 'border-[#B6B6B6]'
      } border-solid mx-auto ${
        textColor ? textColor : 'text-[#E2E8F0]'
      } py-[16] px-[28px] gap-2`}
    >
      {text}
    </button>
  )
}

export default Button
