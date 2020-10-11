import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Menu from "./menu"

import style from "../styles/components/header.module.css"

import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"

import long_hair from "../images/long_hair.jpg"

const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)
  
  return (
    <>
      <header>
        <div className={`${style.header}`}>
          <Link to="/"><h2>{siteTitle}</h2></Link>
          <ol className={`${style.header_navigation}`}>
            <li className={`${style.header_navigation_link}`}><Link to="/">home</Link></li>
            <li className={`${style.header_navigation_link}`}><Link to="/services">services</Link></li>
            <li className={`${style.header_navigation_link}`}><Link to="/gallery">gallery</Link></li>
            <li className={`${style.header_navigation_link}`}><Link to="/about">about</Link></li>
            <li className={`${style.header_navigation_link}`}><Link to="/contact">contact</Link></li>
          </ol>
          <ol className={`${style.header_social}`}>
            <li><img className={`${style.header_social_icon}`} src={facebook} alt="facebook"/></li>
            <li><img className={`${style.header_social_icon}`} src={twitter} alt="twitter"/></li>
            <li><img className={`${style.header_social_icon}`} src={instagram} alt="instagram"/></li>
            <li><img className={`${style.header_social_icon}`} src={youtube} alt="youtube"/></li>
          </ol>
          <div className={`${style.header_menu}`}>
            <button onClick={() => setMenu(true)}>
              <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            { menu ? <Menu setMenu={() => setMenu(false)} /> : null }
          </div>
        </div>
      </header>
      <div className={`${style.hero}`}>
        <img className={`${style.hero_img}`} src={long_hair} alt="long_hair"/>
        <div className={`${style.hero_texts}`}>
          <h4 className={`${style.hero_small}`}>welcome to hairsalon</h4>
          <h2 className={`${style.hero_big}`}>hair salon expert</h2>
          <Link to="/contact"><button className={`${style.hero_book_button}`}>book now!</button></Link>
        </div>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
