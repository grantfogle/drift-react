import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import { Link } from "react-router-dom";


const SignUp = () => {

    // display alert 
    // const alertMessage = () => {

    // }
    /* TODO
        (+) Add social logins (google/facebook)
    */

    return (
        <>
            <FormControl sx={{ m: 2, width: 300 }} variant="outlined">
                <TextField
                    sx={{ m: 1 }}
                    required
                    id="outlined-required"
                    label="Email" />
                <TextField
                    sx={{ m: 1 }}
                    required
                    id="outlined-required"
                    label="Confirm Email" />
                <TextField
                    sx={{ m: 1 }}
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <TextField
                    sx={{ m: 1 }}
                    required
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button sx={{ m: 1 }} size="medium" variant="contained" color="primary">
                    <Link style={{ textDecoration: 'none' }} to="/dashboard"><Typography sx={{ color: '#fff' }} variant="subtitle1">Sign Up</Typography></Link>
                </Button>
            </FormControl>
        </>
    )
}

export default SignUp;