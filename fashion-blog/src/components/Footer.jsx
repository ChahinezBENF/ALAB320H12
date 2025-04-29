import React from 'react'
import Nav from './Nav'

export default function Footer() {
  return (
    <footer>
      <nav aria-label="Main Navigation" role="navigation">
        <ul className='ul' >
        <Nav name="Women's" />
        <Nav name="Men's" />
        <Nav name="On the street" />
        <Nav name="The Catwalk" />
        <Nav name="AdWatch" />
        <Nav name="About" />
        </ul>
      </nav>

      <p>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  )
}
