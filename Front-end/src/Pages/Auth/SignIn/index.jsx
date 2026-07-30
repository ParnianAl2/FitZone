import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, IconButton, Stack, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useFormFields from '../../../Utils/useFormFields';
import { useDispatch } from 'react-redux';
import { login } from '../../../Store/Slices/Auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ handlePageType }) {
    const [showPass, setShowPass] = useState(false)
    const [fields, handleChange] = useFormFields()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
        axios.post('http://localhost:1337/api/auth/local', fields)
            .then(res => {
                if (res.data.jwt) {
                    alert('Login Successfully')
                    dispatch(login({ user: res.data.user.username, token: res.data.jwt }))
                    navigate("/");

                }
            }).catch(err => {
                console.log(err.response.data.error.message);
            })
    }
    return (
        <>
            
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                        width: { md: '65%', xs: '100%', sm: '90%' },
                        gap: '30px',
                        alignItems: 'center',
                        height: '440px',
                        borderRadius: '20px',
                        pt: '70px'
                    }}>
                    <TextField id="outlined-basic" label="Username or Email" type='text' variant="outlined" color="primary" name='identifier' required onChange={handleChange}
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
                    <Stack sx={{ width: '60%' }}>
                        <Stack sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                            <TextField id="outlined-basic" label="Password" type={showPass ? "text" : "password"} variant="outlined" color="primary" name='password' required onChange={handleChange}
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
                        {/* <FormControlLabel label="Remember" control={<Checkbox sx={{ color: 'primary.main' }} />}
                            sx={{ color: 'white' }}
                        /> */}
                    </Stack>
                    <Stack sx={{ gap: '15px' }}>
                        <Button variant="contained" size="large" type='submit' >Sign in</Button>
                        <Button variant="text" size="large" onClick={handlePageType} sx={{ textTransform: "none" }} >Create an Account</Button>
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}
