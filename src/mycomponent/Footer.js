import React from 'react'

export default function Footer() {
    let footerStyle={
        position: "relative",
        top: "5vh",
        width:"100%"
}
  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      My Footer !
    </footer>
  )
}
