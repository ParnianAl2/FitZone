import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../Store/Slices/Cart";
export default function Cart() {
  const Items = useSelector(state => state.cart.list);
  const dispatch = useDispatch();
  const listOfItems = Items?.map((e, index) =>
    <Card key={index}
      sx={{
        width: '1000px',
        height: '105px',
        bgcolor: "rgb(255,255,255,10%)",
        borderRadius: '20px',
        display: 'flex',
        gap: '30px'
      }}>
      <CardActionArea
        sx={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '40px',
          paddingLeft: '3%',
          alignItems: 'center',
          color: 'white'
        }}>
        <CardMedia
          sx={{
            width: '10%',
            height: '95px',
            margin: '5px',
            objectFit: 'cover',
            clipPath: 'circle(50%)'
          }}
          component="img"
          height="140"
          image={import.meta.env.VITE_BASE_URL + e.image[0].url}
          alt="product's image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.title}
          </Typography>
          <Typography variant="body2"
            sx={{
              fontSize: '20px',
              color: '#3B82F6',
              pl: '10px'
            }}>
            ${e.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button variant="contained" onClick={() => {dispatch(removeItem(e.id))}}
        sx={{ height: '55%', width: '5%', mr: ' 30px', my: 'auto', pl: '17px', bgcolor: '#E01919', borderRadius: '12px' }}>
        <DeleteIcon />
      </Button>
    </Card>
  )
  return (
    <>
      <Stack direction={'column'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px'
        }}>
        {listOfItems}
      </Stack>
    </>
  )
}
