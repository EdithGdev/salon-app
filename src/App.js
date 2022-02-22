import './App.css';
import React from 'react';

function App() {

  const hamburger = document.querySelector('.hamburger')
  const menu = document.querySelector('.menu')
  console.log(hamburger)
  hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
  })
  
  return (
    <div className="app">
      <nav className='header'>
        <a className='logo' href='#' ><h3>SLAYED.BY SUZY STUDIO</h3></a>
        <ul className='menu'>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>Contact</a>
          </li>
          
        </ul>
        <div className='hamburger'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </nav>
      <div className='specialty-info'>
        <div className='bridal-party-info'>
          <h3>HELLOO</h3>
          <p>yes</p>
        </div>
        <div className='about-me'></div>
        <div className='services'></div>
        <div className='bottom'></div>
      </div>
      <div className='book-now-button'><h3>BOOK NOW</h3></div>
    </div>
  );
}

export default App;
