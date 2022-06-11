import React from 'react';
import "./Main.css";

const Main = ({ imageSrc }) => {
  return (
    <div className='main'>
        <img src={imageSrc} alt="mads" className='main_image' />
        <h1 className='main_title'>Welcome!</h1>
    </div>
  )
}

export default Main;