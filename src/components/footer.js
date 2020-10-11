import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from 'react'
import style from "../styles/components/footer.module.css"

import facebook from "../images/facebook_light.png"
import twitter from "../images/twitter_light.png"
import instagram from "../images/instagram_light.png"
import youtube from "../images/youtube_light.png"



const Footer = () => {
  return (
    <footer>
      <div className={`${style.footer}`}>
        <div className={`${style.footer_section}`}>
          <h1>HairSalon</h1>
          <h5 className={`${style.footer_subsection} ${style.footer_description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </div>
        <div className={`${style.footer_section}`}>
          <h1>Pages</h1>
          <ol className={`${style.footer_subsection} ${style.footer_navigation}`}>
            <li className={`${style.footer_navigation_link}`}><Link to="/">home</Link></li>
            <li className={`${style.footer_navigation_link}`}><Link to="/services">services</Link></li>
            <li className={`${style.footer_navigation_link}`}><Link to="/gallery">gallery</Link></li>
            <li className={`${style.footer_navigation_link}`}><Link to="/about">about</Link></li>
            <li className={`${style.footer_navigation_link}`}><Link to="/contact">contact</Link></li>
          </ol>
        </div>
        <div className={`${style.footer_section}`}>
          <h1>Subscribe</h1>
          <h5 className={`${style.footer_subsection} ${style.footer_description}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          <div className={`${style.footer_subsection} ${style.footer_input_div}`}>
            <input className={`${style.footer_mail_input}`} placeholder="E-mail"/>
            <button className={`${style.footer_mail_send}`}>send</button>
          </div>
        </div>
        <div className={`${style.footer_bottom}`}>
          <p>
            © {new Date().getFullYear()} Andre Tai
          </p>
          <ol className={`${style.footer_social}`}>
            <li><img className={`${style.footer_social_icon}`} src={facebook} alt="facebook"/></li>
            <li><img className={`${style.footer_social_icon}`} src={twitter} alt="twitter"/></li>
            <li><img className={`${style.footer_social_icon}`} src={instagram} alt="instagram"/></li>
            <li><img className={`${style.footer_social_icon}`} src={youtube} alt="youtube"/></li>
          </ol>
        </div>
      </div>
    </footer>
  )
}

export default Footer