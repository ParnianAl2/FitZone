import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import './style.css'
export default function Categories() {
  const {categoryName} = useParams()
  console.log(categoryName);
  const [categoryP , setCategoryP] = useState()
  useEffect(() => {
    (async () => {
      const res = await fetchData(`products?populate=*&filters[categories][title][$eq]=${categoryName}`)
      setCategoryP(res.data)
      console.log(res.data);
    })();
  },[categoryName])
  const cards = categoryP?.map((e,index) => <Card key={index} sx={{ width: 470 , height: '700px'}}>
    <CardMedia className='category-card'
        sx={{ height: '70%', 
          objectFit: 'contain' 
         }}
        image={import.meta.env.VITE_BASE_URL+e.image[0].url}
        title={e.title}
      />
    <CardContent  sx={{pt:'10px' , pl: '20px' , pb:'0px'}}>
      <Typography gutterBottom variant="h5" component="div">
        {e.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' , pb: '10px' }}>
        {e.description}
      </Typography>
      <Typography component={'span'} 
      sx={{
        fontSize:'25px' ,
        color:'#3B82F6' ,
      }}>
         ${e.price}
      </Typography>
    </CardContent>
    <CardActions sx={{pl:'10px' , pt:'0px'}}>
      <Button size="medium" sx={{textTransform: 'none' , fontSize: '18px' , fontWeight:'500' , wordSpacing:'-2px'}}>Add to cart</Button>
      <Button size="medium">Learn More</Button>
    </CardActions>
  </Card>)
  return (
    <>
      <Stack direction={'row'} 
      sx={{
        gap:'30px' ,
        flexWrap: 'wrap',
        justifyContent:'center'
      }}>
        {cards}
      </Stack>
       
    </>
  )
}
