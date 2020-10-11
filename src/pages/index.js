import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "../styles/pages/index.module.css"
import lady from "../images/lady.jpg"
import razor from "../images/razor.png"
import haircut from "../images/haircut.png"
import barber from "../images/barber.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* General Info */}
    <div className={`${style.index_section} ${style.index_general_info}`}>
      {/* Introduction */}
      <div className={`${style.nested_section}`}>
        <div className={`${style.welcome_part}`}>
          <h4>Welcome to</h4>
          <h2 className="italic">HairSalon</h2>
        </div>
        <p className={`${style.welcome_part} ${style.welcome_text}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vel quam elementum pulvinar etiam non quam. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ullamcorper a lacus vestibulum sed.</p>
        <Link to="/about"><h3 className={`${style.welcome_part}`}>read more</h3></Link>
      </div>
      <div className={`${style.nested_section}`}>
        <img className={`${style.lady_img}`} src={lady} alt="lady"/>
      </div>
      <div className={`${style.opening_div}`}>
        <h2 className={`${style.opening_part}`}>Opening Hours</h2>
        <div className={`${style.opening_part}`}>
          <h5 className="font-semibold">Mon-Fri</h5>
          <h5>10.00am - 08.30pm</h5>
        </div>
        <div className={`${style.opening_part}`}>
          <h5 className="font-semibold">Saturday</h5>
          <h5>Closed</h5>
        </div>
        <div className={`${style.opening_part}`}>
          <h5 className="font-semibold">Sunday</h5>
          <h5>10.00am - 03.30pm</h5>
        </div>
      </div>
    </div>
    <div className={`${style.index_section} ${style.index_general_info}`}>
      <div className={`${style.index_section_title}`}>
        <h2>Featured Services</h2>
        <hr className={`${style.index_section_title_underline}`}/>
      </div>
      <div className={`${style.nested_section} ${style.index_services}`}>
        <img className={`${style.index_services_img} ${style.index_services_part}`} src={razor} alt="razor"/>
        <h4 className={style.index_services_part}>haircut</h4>
        <h5 className={style.index_services_part}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        <h5 className={`${style.index_services_part}`}>RM29</h5>
      </div>
      <div className={`${style.nested_section} ${style.index_services}`}>
        <img className={`${style.index_services_img} ${style.index_services_part}`} src={haircut} alt="haircut"/>
        <h4 className={style.index_services_part}>wash</h4>
        <h5 className={style.index_services_part}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        <h5 className={`${style.index_services_part}`}>RM79</h5>
      </div>
      <div className={`${style.nested_section} ${style.index_services}`}>
        <img className={`${style.index_services_img} ${style.index_services_part}`} src={barber} alt="barber"/>
        <h4 className={style.index_services_part}>treatment</h4>
        <h5 className={style.index_services_part}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
        <h5 className={`${style.index_services_part}`}>RM129</h5>
      </div>
    </div>
  </Layout>
)

export default IndexPage
