import React from 'react'

function Button({w, fs, b, bg, rounded, p, c, title}) {
  return (
    <button style={{ backgroundColor: bg, borderRadius:rounded, padding: p, color: c, width:w, fontSize:fs, border:b }}>
      {title}
    </button>
  )
}

export default Button
