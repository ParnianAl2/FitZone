import React, { useState } from 'react'
import { Box , Button , Checkbox , FormControlLabel , IconButton , Stack , TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useFormFields from '../../../Utils/useFormFields';
import axios from 'axios';

export default function SignUp({ handlePageType }) {
    const [fields, handleChange] = useFormFields()
    const [showPass, setShowPass] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:1337/api/auth/local/register', fields)
            .then(res => {
                if (res.data.jwt) {
                    alert('Register Successfully')
                    handlePageType()
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
                        height: '540px',
                        borderRadius: '20px',
                        pt: '70px'
                    }}>
                    <TextField id="outlined-basic" label="Email" type='email' variant="outlined" color="primary" onChange={handleChange} name='email' required
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
                    <TextField id="outlined-basic" label="Username" type='text' variant="outlined" color="primary" onChange={handleChange} name='username' required
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
                            <TextField id="outlined-basic" label="Password" type={showPass ? "text" : "password"} variant="outlined" color="primary" onChange={handleChange} name='password' required
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
                        {/* <FormControlLabel label="Remember it" control={<Checkbox sx={{ color: 'primary.main' }} />}
                            sx={{ color: 'white' }}
                        /> */}
                    </Stack>
                    <Stack sx={{ gap: '15px' }}>
                        <Button variant="contained" size="large" type="submit">Sign up</Button>
                        <Button variant="text" size="large" onClick={handlePageType} sx={{ textTransform: "none" }} >Do you have an Account ?</Button>
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}
