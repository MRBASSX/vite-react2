import React from 'react'

function Nav() {
  return (
    <div style={{"background":"black",
    "height":"100px",
    "display":"flex",
    "justifyContent":"space-around",
    "alignItems":"center"
    }}>
      <a href="/"> Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Nav
