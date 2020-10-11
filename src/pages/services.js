import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "../styles/pages/services.module.css"

const Services = () => {
  return (
    <Layout>
      <SEO title="Services"/>
      <div className={`${style.services}`}>
        
      </div>
    </Layout>
  )
}

export default Services
