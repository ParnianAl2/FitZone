import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../Store/Slices/Auth'
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Typography, useMediaQuery } from '@mui/material'
import "@fontsource/bebas-neue";
import { Link } from 'react-router-dom'
import '../../App.css'
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Navbar() {
  const { token } = useSelector(state => state.auth)
  console.log(token);
  const dispatch = useDispatch()
  const isMobile = useMediaQuery('(max-width:850px)')
  const [open, setOpen] = React.useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const Main_toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const second_toggleDrawer = (newOpen) => () => {
    setCategoryOpen(newOpen);
  };
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "All Products", path: "/Products" },
    { text: "My Cart", path: "/Cart" },
  ];
  const Main_DrawerList = (
    <Box sx={{ width: 180 }} role="presentation" onClick={Main_toggleDrawer(false)}>
      <List>
        {menuItems.map((e) => (
          <ListItem key={e.text} disablePadding>
            <ListItemButton component={Link} to={e.path}>
              <ListItemText primary={e.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const categoriesItems = [
    { text: "Women", path: "/categories/women" },
    { text: 'Men', path: '/categories/men' },
    { text: 'Bags', path: '/categories/bags' },
    { text: 'Sport Shoes', path: '/categories/sportShoes' }
  ]
  const Second_DrawerList = (
    <Box sx={{ width: 180 }} role="presentation" onClick={second_toggleDrawer(false)}>
      <List>
        {categoriesItems.map((e) => (
          <ListItem key={e.text} disablePadding>
            <ListItemButton component={Link} to={e.path}>
              <ListItemText primary={e.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Stack component={'nav'} direction={'row'}
        sx={{
          justifyContent: 'space-between',
          px: '60px',
          gap: '30px',
          alignItems: 'center',
          width: '100%',
        }}>
        <Stack direction={'row'}
          sx={{
            gap: '20px',
            borderBottom: '1px solid #9A9393',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            px: { xs: 'none', sm: '20px' }
          }}>
          <Stack component={'menu'} sx={{ display: !isMobile ? 'none' : 'flex' }}>
            <Button onClick={Main_toggleDrawer(true)}><MenuIcon sx={{ fontSize: '50px' }} /></Button>
            <Drawer open={open} onClose={Main_toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  bgcolor: "#0F0F0F",
                  color: "white",
                },
              }}>
              {Main_DrawerList}
            </Drawer>
          </Stack>
          <Typography component={'h1'} sx={{ fontSize: { xs: '40px', sm: '50px', md: '55px' }, color: '#B7F000', fontFamily: '"Bebas Neue", sans-serif' }} className='Title'>FITZone</Typography>
          <Stack direction={'row'} sx={{ display: isMobile ? 'none' : 'flex' }}>
            <Button variant='text' sx={{ textTransform: "none", fontSize: '17px' }}><Link to={'/'} style={{ color: '#FFFFFF' }}>Home</Link></Button>
            <Button variant='text' sx={{ textTransform: "none", fontSize: '17px' }}><Link to={'/products'} style={{ color: '#FFFFFF' }}>All products</Link></Button>
            <Button variant='text' sx={{ textTransform: "none", fontSize: '17px' }}><Link to={'/Cart'} style={{ color: '#FFFFFF' }}>My Cart</Link></Button>
          </Stack>
          {token ?
            <Button variant='contained' color='error' sx={{ marginLeft: "auto" }} onClick={() => dispatch(logout())} size={isMobile? 'small' : 'large'}>
              <Typography component={'span'} color='white' sx={{ fontWeight: '700' }}>{isMobile ? <LogoutIcon /> : 'Logout'}</Typography>
            </Button>
            :
            <Button variant='contained' >
              <Link to={'/auth'} style={{ color: 'white', fontWeight: '700' }}>{isMobile ? <PersonIcon /> : 'Sign in/Sign up'} </Link>
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
          }}>
          <Stack
            sx={{
              width: '100%',
              display: !isMobile ? 'none' : 'flex',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}>
            <Stack component={'menu'} sx={{ display: !isMobile ? 'none' : 'flex' }}>
              <Button onClick={second_toggleDrawer(true)} sx={{ color: 'white' }}>Categories</Button>
              <Drawer open={categoryOpen} onClose={second_toggleDrawer(false)}
                sx={{
                  "& .MuiDrawer-paper": {
                    bgcolor: "#0F0F0F",
                    color: "white",
                  },
                }}>
                {Second_DrawerList}
              </Drawer>
            </Stack>
          </Stack>
          <Stack
            sx={{
              width: '100%',
              display: isMobile ? 'none' : 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center'
            }}
          >
            <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/women'} className='categories'>Women</Link></Button>
            <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/men'} className='categories'>Men</Link></Button>
            <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/bags'} className='categories'>Bags</Link></Button>
            <Button variant='text' sx={{ textTransform: "none" }}><Link to={'/categories/sportShoes'} className='categories'>Sport Shoes</Link></Button>
          </Stack>
        </Stack>

      </Stack>
    </>
  )
}
