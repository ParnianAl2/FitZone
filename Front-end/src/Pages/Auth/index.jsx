import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function Auth() {
  // const [showPass, setShowPass] = useState(false)
  const [pageType, setPageType] = useState('signIn')
  const handlePageType = () => {
    setPageType(pageType === 'signIn' ? 'signUp' : 'signIn')
  }
  return (
    <>
      {/* <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: '30px',
        }}
      >
        <Stack
          sx={{
            bgcolor: "rgb(255,255,255,5%)",
            width: '60%',
            gap: '40px',
            alignItems: 'center',
            height: '400px',
            borderRadius: '20px',
            pt: '50px'
          }}>
          <TextField id="outlined-basic" label="Username or Email" type='text' variant="outlined" color="primary"
            sx={{
              width: '60%',
              "& .MuiOutlinedInput-root": {
                "& fieldset, &:hover fieldset, &.Mui-focused fieldset": {
                  borderColor: "primary.main",
                  borderWidth: 3,
                },
              },
            
              "& .MuiInputBase-input": {
                color: "white",
                fontSize: 20,
            
                "&:-webkit-autofill": {
                  WebkitTextFillColor: "white",
                  WebkitBoxShadow: "0 0 0 1000px rgba(0,0,0,0.89) inset",
                },
              },
            
              "& .MuiInputLabel-root": {
                color: "primary.main",
                fontWeight: "bold",
            
                "&.Mui-focused": {
                  color: "primary.main",
                },
              },
            }} />
          <Stack sx={{ display: 'flex', flexDirection: 'row', width: '60%', justifyContent: 'space-between' }}>
            <TextField id="outlined-basic" label="Password" type={showPass ? "text" : "password"} variant="outlined" color="primary"
              sx={{
                width: '90%',
                "& .MuiOutlinedInput-root": {
                  "& fieldset, &:hover fieldset, &.Mui-focused fieldset": {
                    borderColor: "primary.main",
                    borderWidth: 3,
                  },
                },
              
                "& .MuiInputBase-input": {
                  color: "white",
                  fontSize: 20,
                },
              
                "& .MuiInputLabel-root": {
                  color: "primary.main",
                  fontWeight: "bold",
              
                  "&.Mui-focused": {
                    color: "primary.main",
                  },
                },
              }} />
            <IconButton aria-label="ShowPass" sx={{ color: 'white' }} onClick={() => setShowPass(!showPass)}>
              {showPass ? <VisibilityOffIcon sx={{ fontSize: '30px' }} /> : <VisibilityIcon sx={{ fontSize: '30px' }} />}
            </IconButton>
          </Stack>
          <Button variant="contained" sx={{ mt: '30px' }} size="large" >Log in/Sign in</Button>
        </Stack>
      </Box > */}
      {
        pageType === 'signUp' ? <SignUp handlePageType={handlePageType} /> : <SignIn handlePageType={handlePageType} />
      }
    </>
  )
}
