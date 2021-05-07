import React, { useState,useEffect } from "react";
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
import db, { storage } from "../../Firebase/Firebase";
import { useHistory } from "react-router-dom";
// import "./index.css";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import './Plansform.css'
import FormControl from '@material-ui/core/FormControl';
import { sizing } from '@material-ui/system';
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
    margin: theme.spacing(2, 1, 2),
  },
  submit1: {
    margin: theme.spacing(3, 1, 2),
    width: "43%",
    ['@media (max-width:1000px)'] : { // eslint-disable-line no-useless-computed-key
        width:"90%"
      },
  },
  submited: {
    margin: theme.spacing(3, 1, 2),
    width: "43%",
    ['@media (max-width:1000px)'] : { // eslint-disable-line no-useless-computed-key
        width:"90%"
      },
  },
}));

export default function Storeform() {
  const classes = useStyles();
  const history = useHistory();
  const [retailerpartnetname,setretailerpartnetname] = useState();
  const [bannername,setbannername] = useState();
  const [storenumber,setstorenumber] = useState();
  const [storeid,setstoreid] = useState();
  const [storeaddressline1,setstoreaddressline1] = useState();
  const [storeaddressline2,setstoreaddressline2] = useState();
  const [storecity,setstorecity] = useState();
  const [storestate,setstorestate] = useState();
  const [storepostalcode,setstorepostalcode] = useState();
  const [planid,setplanid] = useState();
  const [Planstartdate,setPlanstartdate] = useState();
  const [Planendtdate,setPlanenddate] = useState();
  const [profilepicture,setprofilepicture] = useState();
  const [retailerpicture,setretailerpicture] = useState();
  const [longitude,setlongitude] = useState();
  const [latitude,setlatitude]=useState();
  // const [targetSpend, setTargetspend] = useState();
  // const [cashbackoffer, setCashbackoffer] = useState();
  // const [maxshoppers, setMaxshoppers] = useState();
  // const [planId, setPlanId] = useState();

// const handleuplaod=(e)=>{
//   e.preventDefault()
//   const uploadtask=storage.ref(`retailerprofile/${profilepicture.name}`).put(profilepicture);
//   uploadtask.on(
//     "state_changed",
//     snapshot=>{},
//     error=>{
//       console.log(error);
//     },
//     ()=>{
//       storage.ref("images")
//       .child(profilepicture.name)
//       .getDownloadURL()
//       .then(url=>{
//         console.log(url)
//       });
//     }
    
//   );
// }
  console.log(
    retailerpartnetname,
    bannername,
    storenumber,
    storeid,
    storeid,
    storeaddressline1,
    storeaddressline2,
    storecity,
    storestate,
    storepostalcode,
    planid,
    Planstartdate,
    Planendtdate
    
  );
  console.log("profilepicture",profilepicture)

const setimagetostore=(e)=>{
  e.preventDefault()
  const uploadtask=storage.ref(`retailerprofile/${profilepicture.name}`).put(profilepicture);
  uploadtask.on(
    "state_changed",
    snapshot=>{},
    error=>{
      console.log(error);
    },
    ()=>{
      storage.ref("retailerprofile")
      .child(profilepicture.name)
      .getDownloadURL()
      .then(url=>{
        console.log(url)
        setretailerpicture(url)
      });
    }
    
  );
}

  const sendplan = async(e) => {







    e.preventDefault()
   









    // db.collection("planSummary").doc(localStorage.getItem('myid')).update({
       await db.collection("planSummary").doc(localStorage.getItem("plantemplateid")).update({
      retailerpartnetname:retailerpartnetname,
      banner:bannername,
      storenumber:storenumber,
      storeid: storeid, 
      storeaddressline1:storeaddressline1,
      storeaddressline2:storeaddressline2,
      storecity:storecity,
      storestate:storestate,
      storepostalcode:storepostalcode,
      // planid:planid,
      planstartdate:Planstartdate,
      planenddate:Planendtdate,
    
      profilepicture:retailerpicture,
      logitude:longitude,
      latitude:latitude
      // id:localStorage.getItem('myid')
  })
  .then(() => {
      console.log("Document successfully written!");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
  });

console.log(retailerpicture,"dadasdasdasd")
// create store
    // db.collection("planSummary").doc(localStorage.getItem('myid')).update({
      await  db.collection("store").doc(localStorage.getItem("plantemplateid")).set({
        retailerpartnetname:retailerpartnetname,
        banner:bannername,
        storenumber:storenumber,
        storeid: storeid, 
        storeaddressline1:storeaddressline1,
        storeaddressline2:storeaddressline2,
        storecity:storecity,
        storestate:storestate,
        storepostalcode:storepostalcode,
        // planid:planid,
        planstartdate:Planstartdate,
        planenddate:Planendtdate,
        id:localStorage.getItem('myid')
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });




};


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
    // const handleOpen = (e) => {
    //     e.preventDefault()
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpened(false);
    // };
  return (
    <div className="plan1container">
      <div className="plan1-mainheadeing">
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
            Create New Plan
            </Typography>
            <form className={classes.form}   >
            <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="RETAILER/PARTNER NAME"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setretailerpartnetname(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
                  <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="BANNER NAME"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setbannername(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
                  <TextField
                variant="outlined"
                // width="80%"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="STORE NUMBER"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setstorenumber(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
                  <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="STORE ID"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setstoreid(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
                  <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="STORE ADDRESS LINE 1"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setstoreaddressline1(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />    <TextField
              variant="outlined"
              margin="normal"
              required
            //   fullWidth
              id="planname"
              label="STORE ADDRESS LINE 2"
              name="ID"
              autoComplete=""
              autoFocus
              onChange={(e) => setstoreaddressline2(e.target.value)}
              SelectProps={{
                // className: classes.selectRoot,
                classes: {
                //   root: classes.selectRoot,
                  input: classes.submit
                }
              }}
            className={classes.submit}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
            //   fullWidth
              id="longitude"
              label="LONGITUDE"
              name="longitude"
              autoComplete=""
              autoFocus
              onChange={(e) => setlongitude(e.target.value)}
              SelectProps={{
                // className: classes.selectRoot,
                classes: {
                //   root: classes.selectRoot,
                  input: classes.submit
                }
              }}
            className={classes.submit}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
            //   fullWidth
              id="latitude"
              label="LATITUDE"
              name="latitide"
              autoComplete=""
              autoFocus
              onChange={(e) => setlatitude(e.target.value)}
              SelectProps={{
                // className: classes.selectRoot,
                classes: {
                //   root: classes.selectRoot,
                  input: classes.submit
                }
              }}
            className={classes.submit}
            />
                <TextField
                variant="outlined"
                margin="normal"
                required={true}
                // fullWidth
                id="planname"
                label="STORE CITY"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setstorecity(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
                  <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="STORE STATE"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setstorestate(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
                  <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="STORE POSTAL CODE"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setstorepostalcode(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              />
            {/* <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                id="planname"
                label="PLAN ID"
                name="ID"
                autoComplete=""
                autoFocus
                onChange={(e) => setplanid(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                className={classes.submit}
              /> */}
                        <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                name="planstartdate"
                label="Plan Start Date"
                type="date"
                id="planstartdate"
              
                autoComplete="date"
                onChange={(e) => setPlanstartdate(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                  InputLabelProps={{ shrink: true }} 
                className={classes.submit}
              />
                                <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                name="planenddate"
                label="Plan End Date"
                type="date"
                id="planenddate"
                // defaultValue="2021-05-21"
                // autoComplete="date"
                onChange={(e) => setPlanenddate(e.target.value)}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit
                    }
                  }}
                  InputLabelProps={{ shrink: true }} 
                className={classes.submit}
              />
 {/* <img src={profilepicture}/> */}
              {/* img insert */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                // fullWidth
                name="profilepicture"
                label="please insert profile picture"
                type="file"
                id="profilepicture"
                // defaultValue="2021-05-21"
                // autoComplete="date"
                // onChange={(e) => setprofilepicture(URL.createObjectURL(e.target.files[0]))}
                  onChange={(e) => setprofilepicture(e.target.files[0])}
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submited
                    }
                  }}
                  InputLabelProps={{ shrink: true }} 
                className={classes.submited}
               
               
              />
      
{/*    
           
            
          
           <FormControl variant="outlined"    margin="normal"  required fullWidth  className={classes.formControl}>
        <InputLabel  id="demo-simple-select-outlined-label">TARGET SPEND</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={TARGET}
          onChange={handleChange}
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
   
        */}

      {/* <FormControl variant="outlined"    margin="normal"  required fullWidth  className={classes.formControl}>
        <InputLabel  id="demo-simple-select-outlined-label">CASHBACK OFFER</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          // value={age}
          onChange={handleChange}
          label="CASHBACK OFFER"
         
        >
          <MenuItem value="" fullWidth>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
   

              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              
            
            onClick={(e)=>setimagetostore(e)} style={{marginTop:"0px"}}>please click to upload choosen image</Button>
            <div className="pl1btn">
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit1
                    }
                  }}
                className={classes.submit1}
                  onClick={()=>history.push("templates")}
              >
                Back To Templates
              </Button>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                SelectProps={{
                    // className: classes.selectRoot,
                    classes: {
                    //   root: classes.selectRoot,
                      input: classes.submit1
                    }
                  }}
                className={classes.submit1}
                  onClick={(e)=>sendplan(e)}
                  // onClick={(e)=>handleuplaod(e)}
                
              >
                Save Plan
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
