import React from 'react'
import DealsSlider from './DealsSlider'
import { Button, Stack , Typography, useMediaQuery } from '@mui/material'
import '../../App.css'
import Banner from './Banner'
export default function Home() {
  return (
    <>
      <Banner />
      <Typography component={'h2'} sx={{fontSize:'40px' , height:'95px',display:'flex',alignItems:'center',fontWeight:'900' , margin: '20px'}} className='hotDeals'>HOT DEALS </Typography>
      <DealsSlider />
    </>
  )
}
