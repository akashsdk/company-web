import React from 'react'
import './HelpCart.css';

import Image1 from '../Image/Business Idea Analysis.png';
import Image2 from '../Image/Evaluate Costing.png';
import Image3 from '../Image/Contract Signing1.png';
import Image4 from '../Image/We Build the project.png';

export default function HelpCart() {
  return (
    <div className='help-body' >
        <p className='help-mainText'>MVP Development Process</p>
        <p className='help-DetelsText'>Our MVP development service follows the best practices of the agile development process. At our MVP development company, we follow a straightforward process to build MVP with the highest return on investment.</p>
        <div className='help-TopDiv'>
            <div className='help-TopBox'>
                <img className='help-TopBoxImg' alt=''/>
                <p className='help-TopBoxText1'>Business Idea Analysis</p>
                <p className='help-TopBoxText2'>Analyze product idea, target market, and usability testing.</p>
            </div>
        </div>
    </div>
  )
}
