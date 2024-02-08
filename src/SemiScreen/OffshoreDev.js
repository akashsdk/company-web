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
      text1='Offshore Office Expansion '
      text2='Ready to Expand Your Offshore Office?'
      text3='Set your company with quality software solutions from a dependable partner. Teams that can most effectively design, develop, space, and scale your concept.'
      text4='About Offshore Office Expansion Service'
      text5='Expand Your Business Overseas with Our Offshore Office Services. We will help you establish your new office in another country while retaining control and oversight. With ABCode, you will get the support you need to penetrate new markets and take your business to new heights.'
      text6='Offshore office expansion'
      text7='The offshore office service typically includes the setup of the office, including the acquisition of necessary equipment, management, and technical support to ensure the smooth operation of the business. This service includes staffing the talented developer, training them, and collaborating with the existing team.

      We can help you to form your offshore software development office. We will work as an extension of your in-house software development team. Our It experts assist you according to your needs.
      
      By using {web sit name} offshore office expansion services, you focus on your core business activities rather than spending time on managing resources. It can be more effective and cost-effective.'
      />
      <HelpCart 
      text1='Offshore Office Expansion Process'
      text2='The offshore development process refers to outsourcing software development to a remote team or company in a different country. The goal of offshore development is to take advantage of cost savings and access to a larger pool of talent, while still maintaining control over the development process.'
      text3='Identify the business needs and goals for establishing an offshore office'
      text4='Allocate IT experts for the offshore office including other resources'
      text5='Establish communication between the offshore office and the parent company'
      text6='Setting up a cost effective offshore office with the help of {web sit name}'
      />
    </div>
    <Footer />
  </div>
  )
}
