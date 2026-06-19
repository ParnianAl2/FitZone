import React from 'react'
import bannerImage from "../../../assets/istockphoto-948135968-2048x2048.jpg"
import './style.css';
export default function Banner() {
  return (
    <>
        <img src={bannerImage} alt="../" className='BannerImage'/>
    </>
  )
}
