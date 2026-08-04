import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from "../../Store/Slices/Cart";
export default function ProductDetail() {
  const { id } = useParams()
  console.log(id);
  const [productId, setProductId] = useState();
  const dispatch = useDispatch();
  const InCart = useSelector(state => state.cart.list);
  const isInCart = InCart.some(item => item.id === productId?.id);
  useEffect(() => {
    console.log("EFFECT FIRED, id =", id);
    (async () => {
      try {
        const res = await fetchData(`products?filters[id][$eq]=${id}&populate=*`);
        console.log("FULL RESPONSE:", res);
        setProductId(res.data[0]);
        console.log(productId);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id])
  console.log(productId);
  const changeStyle = useMediaQuery('(max-width:1200px)')
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: changeStyle ? 'column' :'row' ,
            width: changeStyle ? '50%' : '70%',
            height: changeStyle? '850px' : '650px',
            bgcolor: 'rgb(255,255,255,10%)',
            borderRadius: '15px',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}>
          <Stack sx={{ width: changeStyle? '70%' : '40%', height: changeStyle? '50%' : '80%' , pt:changeStyle? '50px' : 'none'}}>
            <img src={import.meta.env.VITE_BASE_URL + productId?.image?.[0]?.url} alt="" sx={{ height: '100%' }} className='product-detail-image' />
          </Stack>
          <Stack sx={{ width: changeStyle? '70%' : '40%', height: '75%', gap: changeStyle? '30px' : '40px', justifyContent: changeStyle? 'center' : 'space-between' }}>
            <Typography component='h1' sx={{ color: 'white', fontSize: '33px' }}>{productId?.title}</Typography>
            <Typography component='h2' sx={{ color: 'white', fontSize: '20px', fontWeight: '200' }}>{productId?.description}</Typography>
            <Stack sx={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
              <Stack>
                {productId?.Discount > 0 ? <Typography sx={{ color: '#FF6B00' }}>Discount : {productId?.Discount}%</Typography> : null}
                <Stack direction={'row'} sx={{gap: '17px' , alignItems:'center'}}>
                  <Typography component='h3'
                    sx={{
                      fontSize: productId?.Discount >0 ? '22px' : '29px',
                      color: productId?.Discount > 0 ? '#8F8C8C' : ' #00A6FF',
                      textDecorationLine: productId?.Discount > 0 ? 'line-through' : 'none'
                    }}>${productId?.price}</Typography>
                  {productId?.Discount > 0 ? <Typography sx={{fontSize: '29px' , color:'#00A6FF'}}>${productId?.price - (productId?.price * productId.Discount / 100)}</Typography> : null}
                </Stack>
              </Stack>
              <Button size="large" variant="contained" sx={{ height: '50px', textTransform: 'none', fontSize: '18px', fontWeight: '500', wordSpacing: '-2px', bgcolor: isInCart ? '#E01919' : '#22C55E' }}
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
