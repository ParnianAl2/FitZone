import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import useFormFields from '../../../Utils/useFormFields';

export default function SignUp({handlePageType}) {
    const [fields, handleChange] = useFormFields()
    const [showPass, setShowPass] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fields);
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
                        width: '60%',
                        gap: '30px',
                        alignItems: 'center',
                        height: '540px',
                        borderRadius: '20px',
                        pt: '70px'
                    }}>
                    <TextField id="outlined-basic" label="Email" type='email' variant="outlined" color="primary" onChange={handleChange} name='email'
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
                    <TextField id="outlined-basic" label="Username" type='text' variant="outlined" color="primary" onChange={handleChange} name='username'
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
                            <TextField id="outlined-basic" label="Password" type={showPass ? "text" : "password"} variant="outlined" color="primary" onChange={handleChange} name='password'
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
                        <FormControlLabel label="Remember it" control={<Checkbox sx={{ color: 'primary.main' }} />}
                            sx={{ color: 'white' }}
                        />
                    </Stack>
                    <Stack sx={{gap:'15px'}}>
                        <Button variant="contained" size="large" type="submit" >Sign up</Button>
                        <Button variant="text" size="large" onClick={handlePageType} >Do you have an Account ?</Button>
                    </Stack>
                </Stack>
            </Box >
        </>
    )
}
