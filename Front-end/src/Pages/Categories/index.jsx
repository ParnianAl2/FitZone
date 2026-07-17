import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../Store/Slices/Cart";
export default function Categories() {
  const { categoryName } = useParams()
  console.log(categoryName);
  const [categoryP, setCategoryP] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetchData(`products?populate=*&filters[categories][title][$eq]=${categoryName}`)
      setCategoryP(res.data)
      console.log(res.data);
    })();
  }, [categoryName])
  const dispatch = useDispatch();
  const InCart = useSelector(state => state.cart.list);
  const cards = categoryP?.map((e, index) => {
    const isInCart = InCart.some(item => item.id === e.id);
    return (
      <Card key={index} sx={{ width: 470, height: '560px' }}>
        <CardMedia className='category-card'
          sx={{
            height: '73%',
            objectFit: 'contain'
          }}
          image={import.meta.env.VITE_BASE_URL + e.image[0].url}
          title={e.title}
        />
        <CardContent sx={{ pt: '10px', pl: '25px', pb: '0px' }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ mb: '0px' }}>
            {e.title}
          </Typography>
          <Typography component={'span'}
            sx={{
              fontSize: '25px',
              color: '#3B82F6',
            }}>
            ${e.price}
          </Typography>
        </CardContent>
        <CardActions sx={{ px: '25px', pt: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <Button size="medium" variant="outlined"><Link to={`/product-detail/${e.id}/${e.title}`}>More</Link></Button>
          <Button size="medium" variant="contained"
            onClick={() => {
              if (isInCart) {
                dispatch(removeItem(e.id))
              } else {
                dispatch(addItem(e))
              }
            }}
            sx={{ textTransform: 'none', fontSize: '18px', fontWeight: '500', wordSpacing: '-2px', bgcolor: !isInCart ? '#22C55E' : '#E01919' }}>
            {isInCart ? 'Remove from cart' : 'Add to cart'}
          </Button>
        </CardActions>
      </Card>
    )
  })
  return (
    <>
      <Stack direction={'row'}
        sx={{
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
        {cards}
      </Stack>

    </>
  )
}
