import React from 'react'
import "../Home/Home.css"
import {Slidecard} from './Slidecard'

const Slider = () => {
  return (
    <>
      <div>
        <section className="homeSlide contentWidth">
          <div className="containerr">
            <Slidecard />
          </div>
        </section>
      </div>
    </>
  )
}

export default Slider