import React, { useReducer } from 'react';
import "./Home.css"
//import hero from "../pic/hero.png"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY PORTFOLIO</h3>
                    <h1>
                      Hi, I'm <span>Martin Garado</span>
                    </h1>
                    <h2>
                      a
                      <span>
                        <Typewriter words={[" IT Student.", " 3rd Year College."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                      </span>
                    </h2>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home