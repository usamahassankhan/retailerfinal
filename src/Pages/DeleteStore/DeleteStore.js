import React, { useState ,useEffect} from "react";
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
import store from "../../images/store.jpg"
import { auth } from "../../Firebase/Firebase";
import db from "../../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import "./DeleteStore.css";
import Modal from '@material-ui/core/Modal';

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
  paper1: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
 

  image: {
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundImage: `url(${store})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    // backgroundColor: theme.palette.primary.dark,
    // backgroundColor:"black",
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
}));

export default function Storeform() {
  const classes = useStyles();
  const history = useHistory();
  const [retailer, setRetailer] = useState();
  const [banner, setBanner] = useState();
  const [storenumber, setStorenumber] = useState();
  const [address, setAddress] = useState();
  const [planId, setPlanId] = useState();
  const [planstartdate, setPlanstartdate] = useState();
  const [endplandate, setPlanenddate] = useState();
  const [open, setOpen] = React.useState(false);
  const[currentuser,setCurrentuser]=useState();
  const[Data,setData]=useState({});
    const handleOpen = (e) => {
        e.preventDefault()
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  console.log(
    retailer,
    banner,
    storenumber,
    address,
    planId,
    planstartdate,
    endplandate
  );
  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
    
    setCurrentuser({user})
 console.log("ii",user)
      } else {
        // No user is signed in.
        console.log("nouser",user)
        setCurrentuser("")
      }
    })
   
  },[])
  const getstoredata=()=>{
    currentuser && db.collection("store").doc(currentuser.user.uid)
 
    .get().then((doc) => {
      if (doc.exists){
        
        
        console.log("nice:",doc.data());
        setData(doc.data())
      } else {
        console.log("No such document!");
      }}).catch((error) => {
        console.log("Error getting document:", error);
      });  
  }
  // useEffect(() => {
    setTimeout(getstoredata, 3000)
    console.log("DATA1",Data)
  // })
  console.log("DATA2",Data)
  return (
    <div className="storepagecontainer">
      <div className="storepage-mainheadeing">
        {/* <h1>IBUY RETAILER APP</h1> */}
      </div>
      {/* <h3>STORE INFORMATION FORM</h3> */}

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={6} className={classes.image} />
        <Grid item xs={12} sm={8} md={6}  component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
             DELETE  STORE
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="retailer"
                // label="Retailer/Partner Name"
                name="retailer"
                autoComplete=""
                autoFocus
                value={Data.name}
                onChange={(e) => setRetailer(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.input
                    }
                  }}
                className={classes.input}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="banner"
                // label="Banner Name"
                name="banner"
                autoComplete=""
                autoFocus
              
                value={Data.banner}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input2: classes.input2
                    }
                  }}
                className={classes.input2}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                // label="Store Number"
                name="storenumber"
                autoComplete=""
                autoFocus
              
                value={Data.storenumber}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.input
                    }
                  }}
                className={classes.input}
              />
                    <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="planid"
                // label="PLAN ID"
                name="ID"
                autoComplete=""
                autoFocus
                value={Data.planId}
             
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input2: classes.input2
                    }
                  }}
                className={classes.input2}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="address"
                // label="Store Address"
                name="address"
                autoComplete=""
                autoFocus
                value={Data.address}
               
        
              />
        
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="planstartdate"
                // label="Plan Start Date"
                type="date"
                id="planstartdate"
                // defaultValue="2021-05-21"
                value={Data.planstartdate}
                autoComplete="date"
               
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.input
                    }
                  }}
                className={classes.input}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="planenddate"
                // label="Plan End Date"
                type="date"
                id="planenddate"
                // defaultValue="2021-12-24"
                autoComplete="date"
                value={Data.endplandate}
               
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input2: classes.input2
                    }
                  }}
                className={classes.input2}
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
                  onClick={handleOpen}
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
