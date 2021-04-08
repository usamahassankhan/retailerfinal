import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import plan from "./../../images/store.jpg";
import Select from '@material-ui/core/Select';
import { auth } from "../../Firebase/Firebase";
import db from "../../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import "./index.css";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: "50vh",
  // },
  input: {
 
    width: 240,
    paddingRight:10
  },
  input2: {
 
    width: 250,

  },
 

  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${plan})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(0, 4),
    marginTop:40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:"#094457",
    color:"white"
  },
  // formControl: {
  //   margin: theme.spacing(1),
  //   minWidth: 490,
  // },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Storeform() {
  const classes = useStyles();
  const history = useHistory();

  const [targetSpend, setTargetspend] = useState();
  const [cashbackoffer, setCashbackoffer] = useState();
  const [maxshoppers, setMaxshoppers] = useState();
  const [plantemplateid, setPlantemplateid] = useState();
  const [plantemplatename, setPlantemplatename] = useState();

  console.log(
    targetSpend,
    cashbackoffer,
    
    maxshoppers,
    plantemplateid,
    plantemplatename
  
  );
  

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [opened, setOpened] = React.useState(false);
  const myid=localStorage.getItem("myid");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClosed = () => {
    setOpened(false);
  };

  const handleOpened = () => {
    setOpened(true);
  };
    const sendtemplate = (e) => {
        e.preventDefault()
        db.collection("template").doc(myid).set({
          targetSpend,
          cashbackoffer,
          
          maxshoppers,
          plantemplateid,
          plantemplatename
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
    };
  
    // const handleClose = () => {
    //   setOpened(false);
    // };
  return (
    <div className="plancontainer">
      <div className="plan-mainheadeing">
        {/* <h1>IBUY RETAILER APP</h1> */}
      </div>
      {/* <h3>PLAN INFORMATION FORM</h3> */}

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Create New Template
            </Typography>
            <form className={classes.form} noValidate onSubmit={sendtemplate}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="planname"
                label="PLAN TEMPLATE NAME"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setPlantemplatename(e.target.value)}
               
              />
                  <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="plantemplateid"
                label="PLAN TEMPLATE ID"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setPlantemplateid(e.target.value)}
               
              />
                 <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="MAX SHOPPERS"
                label="MAX SHOPPERS"
                name="MAXSHOPPERS"
                autoComplete=""
                autoFocus
                onChange={(e) => setMaxshoppers(e.target.value)}
             
              />
              {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="retailer"
                label="TARGET SPEND"
                name="TARGETSPEND"
                autoComplete=""
                autoFocus
                onChange={(e) => setTargetspend(e.target.value)}
            
              /> */}
           
            
          
           <FormControl variant="outlined"    margin="normal"  required fullWidth  className={classes.formControl}>
        <InputLabel  id="demo-simple-select-outlined-label">TARGET SPEND</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={TARGET}
          onChange={(e)=>setTargetspend(e.target.value)}
          label="TARGET SPEND"
         
        >
          <MenuItem value="" fullWidth>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
   
       

      <FormControl variant="outlined"    margin="normal"  required fullWidth  className={classes.formControl}>
        <InputLabel  id="demo-simple-select-outlined-label">CASHBACK OFFER</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={age}
          onChange={(e)=>setCashbackoffer(e.target.value)}
          label="CASHBACK OFFER"
         
        >
          <MenuItem value="" fullWidth>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
   

              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <div className="plbtn">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                  onClick={()=>history.push("templates")}
              >
                Back To Templates
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                //   onClick={loginauth}
              >
                Save Templates
              </Button>
              </div>
              <Grid container>
                {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
                {/* <Grid item>
                  <Link variant="body2" style={{ textAlign: "right" }}>
                    <p onClick={() => history.push("./signup")}>
                      Don't have an account? Sign Up
                    </p>
                  </Link>
                </Grid> */}
              </Grid>
              <Box mt={5}></Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
