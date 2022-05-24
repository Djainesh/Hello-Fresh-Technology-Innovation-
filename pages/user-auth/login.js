import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useAuth } from '../../firebase/AuthUserContext';
import { Grid, CssBaseline, Paper, Box, Avatar, Typography, TextField, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import classes from "./login.module.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const { signIn } = useAuth();


    const loginUser = async event => {
        event.preventDefault()
        signIn(email, password)
            .then((result) => {
                console.log("Success: " + result)
                router.push("/Products")
            })
            .catch((error) => {
                console.log("Error:" + error)
            });
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
                    backgroundImage: 'url(https://easy-housing-website.s3.amazonaws.com/LoginPage.png)',
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
                        Log in
                    </Typography>
                    <Box component="form" noValidate onSubmit={loginUser} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        //autoComplete="email"
                        //autoFocus
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
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => { router.push('/user-auth/register') }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        // <div className={classes.container}  style={{ height: '100vh' }}>
        //     <span className={classes.header}>
        //         <h1 className="display-4">
        //             Login to your Account
        //         </h1>
        //     </span>

        //     <section className="formContainer">
        //         <form className={classes.form} onSubmit={loginUser}>
        //             <div className={classes.control}>
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

        //             <div className={classes.control}>
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

        //             <div className={classes.control}>
        //                 <button type="submit" className="btn btn-dark customBtn">Login</button>

        //                 <button type="button" onClick={() => { router.push('/user-auth/register') }} className="btn btn-secondary customBtn">Register</button>
        //             </div>
        //         </form>
        //     </section>
        // </div >

        //   <div className={classes.control}>
        //     <Button
        //       align='center'
        //       style={{ backgroundColor: "#f57f36", color: "black", width: 100 }}
        //       type="submit"
        //       className="btn btn-dark customBtn"
        //     >
        //       Login
        //     </Button>
        //     <br />
        //     <Typography variant="h6" fontSize='15px' fontFamily='times'>
        //         New User? <Link
        //       onClick={() => {
        //         router.push("/user-auth/register");
        //       }}
        //     >Register here!!</Link>
        //     </Typography>
        //   </div>
        //     </form >
        //   </section >
        // </div >
    );
}
