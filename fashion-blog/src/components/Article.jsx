import React from 'react'
import BlogImage1 from '../assets/images/blog-image-1.jpg';
import BlogImage2 from '../assets/images/blog-image-2.jpg';

export default function Article() {
  return (
    <main>

        <article>
            <h3>On the Street in Brooklyn</h3>
            <img src={BlogImage1} alt="A stylish outfit on the streets of Brooklyn"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            <a href="#">Continues...</a>
        </article>

        <article>
            <h3>Vintage in Vogue</h3>
            <img src={BlogImage2} alt="Vintage vogue fashion" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
            <a href="#">Continues...</a>
        </article>

    </main>
  )
}
