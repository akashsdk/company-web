import React from 'react'
import './OffshoreDev.css';

import ServicesCart from "../Cart/ServicesCart";
import HelpCart from "../Cart/HelpCart";
import Footer from '../Components/Footer';

export default function OffshoreDev() {
  return (
    <div className="AppBody">
    <div className="offshoreDev-Body">
      <ServicesCart 
      text1=''
      text2=''
      text3=''
      text4=''
      text5=''
      text6=''
      text7=''
      />
      <HelpCart 
      text1=''
      text2=''
      text3=''
      text4=''
      text5=''
      text6=''
      />
      <Footer />
    </div>
  </div>
  )
}
