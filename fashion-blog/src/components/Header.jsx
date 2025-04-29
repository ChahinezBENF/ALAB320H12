import React from 'react'
import Nav from './Nav'

export default function Header() {

  return (
    <header className='header'><h1>Sartre's List</h1>
     <h2> Better-Dressed People</h2>
   <div aria-label="Main Navigation" role="navigation">
        <ul >
        <Nav name="Women's" />
        <Nav name="Men's" />
        <Nav name="On the street" />
        <Nav name="The Catwalk" />
        <Nav name="AdWatch" />
        <Nav name="About" />
        </ul>
    </div>

     </header>
  )
}
