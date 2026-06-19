import React from 'react'
import { Navigate , Route , Routes } from 'react-router-dom'
import  Navbar from './Components/Navbar'
import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Footer from './Components/Footer'
import { useSelector } from 'react-redux'
import  Home  from './Pages/Home'
import  Products  from './Pages/Products'
import  Categories  from './Pages/Categories'
import  ProductDetail  from './Pages/ProductDetail'
import  Cart  from './Pages/Cart'
import  Auth  from './Pages/Auth'
import NotFound from './Pages/NotFound'
import Container from '@mui/material/Container';
export default function App() {
  // const { token }  = useSelector(state => state.auth)
  const token = "nibwieu"
  return (
    <>
      {/* <Typography variant='h1' component={'h1'}>Hello world</Typography> */}
      <Navbar />
      <Container maxWidth="xl">
        <Box component={'main'} sx={{ minHeight: '80vh'}}>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route path='/Products' element={ <Products /> } />
            <Route path='/Categories/:categoryName' element={ <Categories /> } />
            <Route path='/product-detail/:id/:name' element={<ProductDetail />}/>
            <Route path='/Cart' element={token ? <Cart/> : <Navigate to='/Auth'/>}/>
            <Route path='/Auth' element={!token ? <Auth /> : <Navigate to='/'/>}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

