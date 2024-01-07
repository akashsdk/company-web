import React from 'react'
import './Home.css';
import { FloatButton } from "antd";

import HomeAnimation from '../Components/HomeAnimation';

export default function Home() {
  return (
    <div className='home-Body'>
      <div className='homeBody'>
        {/* <HomeAnimation/> */}
      <div className='homeMain-Body'>
        <div>Left</div>
        <div>right</div>
      </div>
      </div>
    </div>
  )
}
