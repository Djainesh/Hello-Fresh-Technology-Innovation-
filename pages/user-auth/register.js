import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useAuth } from '../../firebase/AuthUserContext';
import classes from './register.module.css'
import { Grid, CssBaseline, Paper, Box, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const router = useRouter();
    const { createUser } = useAuth();

    const onFormSubmit = async event => {
        event.preventDefault()

        //TODO: input validation

        createUser(email, password, firstName, lastName)
            .then((result) => {
                console.log("Success: " + result)
                router.push("/Products")
            })

    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://easy-housing-website.s3.amazonaws.com/Signup.jpeg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "black" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate onSubmit={onFormSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="Firstname"
                            name="firstName"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Lastname"
                            name="lastName"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="emailConfirm"
                            label="Confirm Email Address"
                            name="emailConfirm"
                            value={emailConfirm}
                            onChange={(event) => setEmailConfirm(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordConfirm"
                            label="Confirm Password"
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={(event) => setPasswordConfirm(event.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => { router.push('/user-auth/login') }}
                        >
                            Log In
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        // <div className={classes.container}>
        //     <span className={classes.header}>
        //         <h1 className="display-4">
        //             Register an Account
        //         </h1>
        //     </span>
        //     <section className="formContainer">

        //         <form className="form" onSubmit={onFormSubmit}>

        //             <div className="control">
        //                 <label htmlFor="firstName"></label>
        //                 <input
        //                     type="text"
        //                     id="firstName"
        //                     required
        //                     placeholder="first name"
        //                     value={firstName}
        //                     onChange={(event) => setFirstName(event.target.value)}
        //                 />
        //             </div>
        //             <div className="control">
        //                 <label htmlFor="lastName"></label>
        //                 <input
        //                     type="text"
        //                     id="lastName"
        //                     placeholder="last name"
        //                     required
        //                     value={lastName}
        //                     onChange={(event) => setLastName(event.target.value)}
        //                 />
        //             </div>
        //             <div className="control">
        //                 <label htmlFor="email"></label>
        //                 <input
        //                     type="email"
        //                     id="email"
        //                     placeholder="email"
        //                     required
        //                     value={email}
        //                     onChange={(event) => setEmail(event.target.value)}
        //                 />
        //             </div>
        //             <div className="control">
        //                 <label htmlFor="emailConfirm"></label>
        //                 <input
        //                     type="email"
        //                     id="emailConfirm"
        //                     placeholder="confirm email"
        //                     required
        //                     value={emailConfirm}
        //                     onChange={(event) => setEmailConfirm(event.target.value)}
        //                 />
        //             </div>
        //             <div className="control">
        //                 <label htmlFor="password"></label>
        //                 <input
        //                     type="password"
        //                     id="password"
        //                     required
        //                     placeholder="password"
        //                     value={password}
        //                     onChange={(event) => setPassword(event.target.value)}
        //                 />
        //             </div>

        //             <div className="control">
        //                 <label htmlFor="passwordConfirm"></label>
        //                 <input
        //                     type="password"
        //                     id="passwordConfirm"
        //                     required
        //                     placeholder="confirm password"
        //                     value={passwordConfirm}
        //                     onChange={(event) => setPasswordConfirm(event.target.value)}
        //                 />
        //             </div>
        //             <div className="control">
        //                 <div className="buttons">
        //                     <button type="button" onClick={() => { router.push('/user-auth/login') }} className="btn btn-secondary customBtn">Back to login</button>
        //                     <button type="submit" className="btn btn-dark customBtn">Register</button>
        //                 </div>
        //             </div>
        //         </form>
        //     </section>
        // </div>
    )
}