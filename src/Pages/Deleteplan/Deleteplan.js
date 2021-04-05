import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Select from '@material-ui/core/Select';
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import plan from "./../../images/store.jpg";
// import { auth } from "../../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import "./index.css";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "50vh",
  },
  input: {
 
    width: 240,
    paddingRight:10
  },
  input2: {
 
    width: 250,

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:"#094457",
    color:"white"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
}));


  

 export default function Storeform() {
  const classes = useStyles();
  const history = useHistory();

  const [targetSpend, setTargetspend] = useState();
  const [cashbackoffer, setCashbackoffer] = useState();
  const [maxshoppers, setMaxshoppers] = useState();
  const [planId, setPlanId] = useState();


  console.log(
    targetSpend,
    cashbackoffer,
    
    maxshoppers,
    planId,
  
  );
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState('');
  const [opened, setOpened] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClosed = () => {
    setOpened(false);
  };

  const handleOpened = () => {
    setOpened(true);
  };
    const handleOpen = (e) => {
        e.preventDefault()
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpened(false);
    };
 
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
             DELETE PLAN
            </Typography>
            <form className={classes.form} noValidate>
            <FormControl  className={classes.formControl}>
        <InputLabel  id="demo-controlled-open-select-label">PLAN ID</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={opened}
          onClose={handleClosed}
          onOpen={handleOpened}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="planid"
                label="PLAN ID"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setPlanId(e.target.value)}
               
              /> */}
              <TextField
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
            
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="CASHBACK OFFER"
                label="CASHBACK OFFER"
                name="CASHBACK OFFER"
                autoComplete=""
                autoFocus
                onChange={(e) => setCashbackoffer(e.target.value)}
          
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
                onClick={(e)=>handleOpen(e)}
              >
                DELETE
              </Button>
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
      <Modal
       
        className={classes.modal}
        open={open}
        onClose={handleClose}
      
        
      >
       
          <div className={classes.paper1}>
            <h2>Are You sure </h2>
            <p >It will delete Your respective plan</p>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <button className="modalbtn">Yes</button>
                <button  className="modalbtn" onClick={()=>setOpen(false)}>No</button>
            </div>
          </div>
        
      </Modal>
    </div>
  );
}
