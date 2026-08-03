import { Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
  return (
    <>
      <Stack sx={{height:'300px' , paddingTop: '40px' , borderTop: '1px solid #9A9393'}}>
        <Typography sx={{fontSize:'25px'}}>FITZone social medias :</Typography>
        <InstagramIcon />
      </Stack>
    </>
  )
}
