import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
export default function Auth() {
  return (
    <>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '30px',
        }}
      >
        <Stack sx={{
          bgcolor: "rgb(255,255,255,10%)",
          width: '60%',
          gap: '40px',
          alignItems: 'center',
          height: '400px',
          borderRadius: '20px',
          pt: '50px'
        }}>
          <TextField id="outlined-basic" label="UserName" variant="outlined" color="warning" sx={{
            width: '60%',
            '& .MuiInputLabel-root': { color: 'white' },
            // '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white'},
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white'}
          }} />
          <TextField id="outlined-basic" label="Password" variant="outlined" color="warning" sx={{ width: '60%' }} />
        </Stack>
      </Box>
    </>
  )
}
