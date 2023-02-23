import React from 'react'
import MainPage from '../components/TranslationPage/MainPage'
import Navbar from '../components/Navbar/Navbar'
import './TranslationPage.css'
/**
 * Main component is the main page for registering translation and display the hand sign
*/
function Main() {
  return (
    <div className='main-page-container'>
      <Navbar />
      <section className='main-container'>
        <img src='img/robot.png' className='robot'></img>
        <article className='main-article-container'>
        <h2>Lost in Translation</h2>
        <p>Enter sentence to translate</p>
        </article>
      </section>
      <MainPage />
    </div>
  )
}

export default Main