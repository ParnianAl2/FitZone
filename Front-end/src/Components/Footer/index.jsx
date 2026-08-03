import { Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
  return (
    <>
      <Stack sx={{height:'300px' , paddingTop: '40px' , paddingLeft: '150px' , borderTop: '1px solid #9A9393' , gap:'10px'}}>
        <Typography sx={{fontSize:'25px' , color: '#00A6FF'}}>FITZone social medias </Typography>
        <InstagramIcon sx={{color:'white' , marginLeft:'20px'}} />
      </Stack>
    </>
  )
}
