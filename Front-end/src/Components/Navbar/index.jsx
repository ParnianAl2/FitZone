import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Store/Slices/Auth'
import { Button, Stack, Typography, useMediaQuery } from '@mui/material'
import "@fontsource/bebas-neue";
import { Link } from 'react-router-dom'
import '../../App.css'

export default function Navbar() {
  const { token } = useSelector(state => state.auth)
  // const token = "nibwieu"
  const dispatch = useDispatch()
  const isMobile = useMediaQuery('(max-width:700px)')
  return (
    <>
      <Stack component={'nav'} direction={'row'}
        sx={{
          justifyContent: 'space-between',
          px: '60px',
          gap: '30px',
          alignItems: 'center',
          width: '100%',
          display: isMobile ? 'none' : 'flex',
        }}>
        <Stack direction={'row'}
          sx={{
            gap: '15px',
            borderBottom: '1px solid #9A9393',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            px: '70px'
          }}>
          <Typography component={'h1'} sx={{ fontSize: '55px', color: '#FF3B30', fontFamily: '"Bebas Neue", sans-serif' }} className='Title'>FITZone</Typography>
          <Button variant='text' sx={{ textTransform: "none", fontSize: '17px' }}><Link to={'/'} style={{ color: '#FFFFFF' }}>Home</Link></Button>
          <Button variant='text' sx={{ textTransform: "none", fontSize: '17px' }}><Link to={'/products'} style={{ color: '#FFFFFF' }}>All products</Link></Button>
          <Button variant='text' sx={{ textTransform: "none", fontSize: '17px' }}><Link to={'/Cart'} style={{ color: '#FFFFFF' }}>My Cart</Link></Button>
          {token ?
            <Button variant='contained' color='error' sx={{ marginLeft: "auto" }} onClick={() => dispatch(logout())}>
              <Typography component={'span'} color='white' sx={{ fontWeight: '700' }}>Logout</Typography>
            </Button>
            :
            <Button variant='contained' >
              <Link to={'/auth'} style={{ color: 'white', fontWeight: '700' }}>Sign in/Sign Out</Link>
            </Button>
          }
        </Stack>
      </Stack>

      <Stack direction={'row'}
        sx={{
          width: '100%',
          height: '80px',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Stack direction={'row'}

          sx={{
            width: '40%',
            height: '50px',
            border: '2px solid #9A9393',
            borderRadius: '30px',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
          <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/women'} className='categories'>Women</Link></Button>
          <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/men'} className='categories'>Men</Link></Button>
          <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/bags'} className='categories'>Bags</Link></Button>
          <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/sportShoes'} className='categories'>Sport Shoes</Link></Button>
        </Stack>

      </Stack>
    </>
  )
}
