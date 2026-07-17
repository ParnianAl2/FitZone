import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData';

export default function ProductDetail() {
  const { id, title } = useParams()
  console.log(id);
  console.log(title);
  const [productId, setProductId] = useState();
  useEffect(() => {
    console.log("EFFECT FIRED, id =", id);
    (async () => {
      try {
        const res = await fetchData(`products/${id}?populate=*`);
        console.log("FULL RESPONSE:", res);
        setProductId(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id])
  return (
    <>
      <Stack direction={'row'} sx={{ width: '70%', height: '650px', bgcolor: '#eee3e381', borderRadius: '20px', justifyContent: 'space-between' }}>
        <Box>
          <img src={import.meta.env.VITE_BASE_URL + productId?.image[0]?.url} alt="" />
        </Box>
        <Box>
          <Typography variant='h1'>1</Typography>
          <Typography variant='h1'>2</Typography>
          <Typography variant='h1'>3</Typography>
        </Box>
      </Stack>
    </>
  )
}
