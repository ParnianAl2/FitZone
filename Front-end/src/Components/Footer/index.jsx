import { Stack, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
export default function Footer() {
  return (
    <>
      <Stack sx={{ height: '200px'}}>
        <Stack sx={{ borderTop: '1px solid #615F5F', gap: '10px' , marginTop:"30px" , paddingTop:'20px' , alignItems:'center' }}>
          <Typography sx={{ fontSize: '20px', color: 'white' }}>FITZone social medias </Typography>
          <Stack sx={{ flexDirection: 'row', gap: '5px' }}>
            <InstagramIcon sx={{ color: 'white' }} />
            <XIcon sx={{ color: 'white' }} />
          </Stack>
          <Stack sx={{ marginTop: '25px'}}>
            <Typography sx={{ color: 'white' }}>© 2026 FitZone • Demo Project • Made with React</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}
