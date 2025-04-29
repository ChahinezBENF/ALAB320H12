import React from 'react'
import Nav from './Nav'

export default function Header() {

  return (
    <header className='header'><h1>Sartre's List</h1>
     <h2> Better-Dressed People</h2>
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

     </header>
  )
}
