import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import store from './../../images/store.jpg'
import './Signup.css';
import {useHistory} from 'react-router-dom';
import {auth} from './../../Firebase/Firebase';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
  },
  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${store})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signup() {

    const history=useHistory()
  const classes = useStyles();
const [email,setEmail]=useState();
const [password,setPassword]=useState();
const [confirmpassword,setConfirmpassword]=useState();
const [passwordreerror,setpasswordreerror]=useState();
console.log(email,password);
console.log(confirmpassword);

const signup=(e)=>{
    e.preventDefault();
    if(password===confirmpassword){
   
auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log("user",user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   error.code && alert(errorCode);
   error.message && alert(errorMessage);
    
    // ..
  });
  setpasswordreerror("");
  setEmail("");
  setPassword("")
}
else if(password !==passwordreerror) {
    setpasswordreerror("YOUR PASSWORD IS NOT REMATCHING");
   
}
else{
    setpasswordreerror("");
    setEmail("");
    setPassword("")
}
}
  return (
      <div className ="homepagecontainer">
          <div className="homepage-mainheadeing">
              <h1 >IBUY RETAILER APP</h1>

          </div>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} Validate onSubmit={signup}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
                      <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="ConfirmPassword"
              type="password"
              id="repassword"
              autoComplete="current-password"
              onChange={(e)=>setConfirmpassword(e.target.value)}
            />
            {passwordreerror &&<p style={{color:"red"}}>{passwordreerror}</p>}
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link  variant="body2" style={{textAlign:"right"}}>
                  <p onClick={()=>history.push('./')}>have an account? Sign in</p>
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
           
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}
