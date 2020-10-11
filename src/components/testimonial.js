import React from 'react'
import style from "../styles/components/testimonial.module.css"
import testi from "../images/testi.jpg"
import star from "../images/star.png"

const Testimonial = () => {
  return (
    <div className={`${style.testimonial_section}`}>
      <div className={`${style.testimonial_section_title}`}>
        <h2>Testimonials</h2>
        <hr className={`${style.testimonial_section_title_underline}`}/>
      </div>
      <div className={`${style.testimonial_content}`}>
        <img className={`${style.testimonial_part} ${style.testimonial_img}`} src={testi} alt="testimonial"/>
        <div className={`${style.testimonial_review}`}>
          <div className={`${style.testimonial_part}`}>
            <h2 className={`${style.testimonial_caption}`}>New Haircut!</h2>
            <hr className={`${style.testimonial_caption_underline}`}/>
          </div>
          <h3 className={`${style.testimonial_part} ${style.testimonial_text}`}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam."
          </h3>
          <h1 className={`${style.testimonial_part} ${style.testimonial_text}`}>- Lorem ipsum</h1>
          <div className={`${style.testimonial_part} ${style.testimonial_rating}`}> 
            <img className={`${style.testimonial_rating_star}`} src={star} alt="star"/>
            <img className={`${style.testimonial_rating_star}`} src={star} alt="star"/>
            <img className={`${style.testimonial_rating_star}`} src={star} alt="star"/>
            <img className={`${style.testimonial_rating_star}`} src={star} alt="star"/>
            <img className={`${style.testimonial_rating_star}`} src={star} alt="star"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial