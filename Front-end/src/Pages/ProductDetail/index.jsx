import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from "../../Store/Slices/Cart";
export default function ProductDetail() {
  const { id } = useParams()
  const [productId, setProductId] = useState();
  const dispatch = useDispatch();
  const InCart = useSelector(state => state.cart.list);
  const isInCart = InCart.some(item => item.id === productId?.id);
  useEffect(() => {
    console.log("EFFECT FIRED, id =", id);
    (async () => {
      try {
        const res = await fetchData(`products?filters[id][$eq]=13&populate=*`);
        console.log("FULL RESPONSE:", res);
        setProductId(res.data[0]);
        console.log(productId);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id])
  console.log(productId);
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            direction: 'row',
            width: '70%',
            height: '650px',
            bgcolor: 'rgb(255,255,255,10%)',
            borderRadius: '15px',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
          <Stack sx={{ width: '40%', height: '80%' }}>
            <img src={import.meta.env.VITE_BASE_URL + productId?.image?.[0]?.url} alt="" sx={{ height: '100%' }} className='product-detail-image' />
          </Stack>
          <Stack sx={{ width: '40%', height: '75%', gap: '40px', justifyContent: 'space-between' }}>
            <Typography component='h1' sx={{ color: 'white', fontSize: '33px' }}>{productId?.title}</Typography>
            <Typography component='h2' sx={{ color: 'white', fontSize: '20px', fontWeight: '200' }}>{productId?.description}</Typography>
            <Stack sx={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
              <Typography component='h3' sx={{ fontSize: '29px', color: ' #3B82F6'}}>${productId?.price}</Typography>
              <Button size="large" variant="contained" sx={{ textTransform: 'none', fontSize: '18px', fontWeight: '500', wordSpacing: '-2px', bgcolor: isInCart ? '#E01919' : '#22C55E' }}
                onClick={() => {
                  if (isInCart) {
                    dispatch(removeItem(productId.id));
                  } else {
                    dispatch(addItem(productId))
                  }
                }}
              >{isInCart ? 'Remove from cart' : 'Add to cart'}</Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
