import React, { useEffect } from 'react'

export default function About() {

  useEffect(() => {

  })

   

  window.onscroll = () => {

    document.querySelector('.header .navbar').classList.remove('active');
        document.querySelector('#header #search-form').classList.remove('active');
        document.querySelector('#header .login-form').classList.remove('active');
        document.querySelector('#header #information-user').classList.remove('active');

    let text = document.getElementById('text');
    let bird1 = document.getElementById('bird1');
    let bird2 = document.getElementById('bird2');
    let btn = document.getElementById('btn');
    let rocks = document.getElementById('rocks');
    let forest = document.getElementById('forest');
    let water = document.getElementById('water');
    let value = window.scrollY;
    text.style.top = 60 + value * -0.25 + "%";
    text.style.transition  = "all 2s";
    bird1.style.top = value * -1.5 + "px";
    bird1.style.left = value * 2 + 'px';
    bird1.style.transition  = "all 2s";
    bird2.style.top = value * -1.5 + "px";
    bird2.style.left = value * -5 + 'px';
    bird2.style.transition  = "all 2s";
    rocks.style.top = value * -0.12 + 'px';
    rocks.style.transition  = "all 1s";
    forest.style.top = value * 0.25 + 'px';
    forest.style.transition  = "all 1s";

  }


  return (
    <div className='about-main' id='home' >
        <section>
        <h2 id='text'><span>Welcome to </span>
        <br/>
        Quynh My Store
        </h2>

        <img src='images/bird1.png' id='bird1' />
        <img src='images/bird2.png' id='bird2' />
        <img src='images/forest.png' id='forest' />

        <a href='#' id='btn' >Explore
        </a>
        <img src='images/rocks.png' id='rocks' /> 
        <img src='images/water.png' id='water' /> 

        </section>

        <div className='sec' >
          <h2>Quynh My Store</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
        </div>
    </div>
  )
}
