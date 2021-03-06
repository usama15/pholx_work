import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Stack from "@mui/material/Stack";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import "./Login.css";
import { Link } from "react-router-dom";
import { ListItemText } from "@material-ui/core";
import db from "../../database/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Store/Reducers/AddToCart";
import { addUserData } from "../../Store/Reducers/UserReducer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const auth = getAuth(); 

const Login = () => {
  
  const [product, setProduct] = React.useState([]);
  const [product2, setProduct2] = React.useState([]);
  const [userUid, setUserUid] = React.useState();
  const [userState, setUserState] = React.useState();
  const [fData, setFdata] = React.useState([]);
  const dispatch = useDispatch();
  const udata = useSelector((state) => state.cart);
  const udata2 = useSelector((state) => state.user.initialUserState);
  console.log(udata2);
  const test = addUserData({
    email: udata2.email,
    gender: udata2.gender,
    date: udata2.date,
    id: udata2.id,
    phone: udata2.phone,
    fullname: udata2.fullname,
  });
  // const udata2 = useSelector((state) => state.userData.initialState);
  // console.log(test);
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [tvalue, setTvalue] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setTvalue(newValue);
  };

  const handleChange = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [textValue, textSetValue] = useState("Controlled");

  const handleTextValueChange = (event) => {
    textSetValue(event.target.value);
    console.log(textValue);
  };

  React.useEffect(() => {
    const collectionProduct = collection(db, "userData");

    const unsub = onSnapshot(collectionProduct, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(data);
      console.log(data);
      // console.log('data' ,data.filter(x => x.email === values.email))
    });

    return unsub;
  }, []);
  const SignIn = () => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        //
        setUserUid(userCredential.user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (product) {
        product.map((data) => {
          if (data.email == user.email) {
            dispatch(addCart(data));
            dispatch(addUserData(data));
          }
        });
      }
      setUserState(true);
    } else {
      setUserState(false);
    }
  });
  const Out = () => {
    signOut(auth)
      .then(() => {
        dispatch(addCart([]));
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      {userState == true ? (
        <>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              // height: 224,
              // border: "1px solid"
            }}
          >
            <Box>
              <Tabs
                orientation="vertical"
                value={tvalue}
                onChange={handleChangeTab}
                aria-label="basic tabs example"
                style={{ marginTop: "35%" }}
              >
                <Tab label="My Profile" {...a11yProps(0)} />
                <Tab label="Track Order" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={tvalue} index={0}>
              <h1 className="head-pro">My Profile</h1>
              <div className="pro-div">
                <div
                  className="pro-div-m1"
                  // style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
                >
                  {/* <Card sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}> */}
                  <div>
                    <h5>Full Name</h5>
                    <h5 className="lessHeading">{udata2.fullname}</h5>
                  </div>
                  <div>
                    <h5>Email Address</h5>
                    <h5 className="lessHeading">{udata2.email}</h5>
                  </div>
                  <div>
                    <h5>Mobile</h5>
                    <h5 className="lessHeading">{udata2.phone}</h5>
                  </div>
                </div>
                <div className="pro-div-m2">
                  <div>
                    <h5>Birthday</h5>
                    <h5 className="lessHeading">{udata2.date}</h5>
                  </div>
                  <div>
                    <h5>Gender</h5>
                    <h5 className="lessHeading">{udata2.Gender}</h5>
                  </div>
                </div>
                <div className="pro-div-btn">
                  {/* <Button size="small" onClick={() => Out()}>LogOut</Button> */}
                    <Button
                      onClick={() => Out()}
                      variant="contained"
                      className="btnLog-pro"
                    >
                      LogOut
                    </Button>
                </div>
                {/* <CardActions>
                  <Button size="small" onClick={() => Out()}>LogOut</Button>
                </CardActions> */}
                {/* <div></div>
                  <div></div>
                  <div></div> */}
                {/* <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                      be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      adjective
                    </Typography>
                    <Typography variant="body2">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions> */}
                {/* </Card> */}
                <div>
                  {/* //.............................................................................. */}
                  {/* <div>Name: {udata.fullname}</div>
                  <div>Email: {udata.email}</div>
                  <div>Date Of Birth: {udata.date}</div>
                  <div>Gender: {udata.Gender}</div>
                  <div>Contact NO: {udata.phone}</div> */}
                </div>
                {/* <Button onClick={() => Out()}>LogOut</Button> */}
              </div>
            </TabPanel>
            <TabPanel value={tvalue} index={1}>
              <h6>Coming Soon .........!!!!!!!</h6>
            </TabPanel>
          </Box>
        </>
      ) : (
        <div className="divLog">
          <div className="divHead">
            <h1>Welcome to Pholx! Please login</h1>
            <p>
              New member?
              <Link className="linkReg" to="/Register">
                Register
              </Link>{" "}
              here.
            </p>
          </div>
          <div></div>
          <div className="divForm">
            <Box>
              <Grid className="grid" container spacing={0} columns={12}>
                <Grid className="inputGrid" item xs={6}>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 0, width: "30ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      <TextField
                        id="standard-textarea"
                        label="Number or Email"
                        variant="standard"
                        onChange={handleChange("email")}
                        className="loginInput"
                        value={values.email}
                      />
                      {/* <input type="text"/> */}
                    </div>
                  </Box>
                  <br />
                  <Box
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "30ch" },
                    }}
                  >
                    <div>
                      {/* <FormControl
                        variant="standard"
                      > */}
                        <TextField
                          id="standard-textarea"
                          label="Password"
                          type="password"
                          // variant="standard"
                          onChange={handleChange("password")}
                          className="loginInput"
                          value={values.password}
                        />
                        {/* <input
                          id="standard-adornment-password"
                          type={values.showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange("password")}
                          endadornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        /> */}
                      {/* </FormControl> */}
                    </div>
                  </Box>
                </Grid>

                <Grid className="btnGrid" item xs={6}>
                  <Button
                    onClick={() => SignIn()}
                    variant="contained"
                    className="btnLog"
                    // onClick={() => console.log('hello')}
                  >
                    Login
                  </Button>
                  <p className="pera">Or, login with</p>
                  <Button variant="contained" className="btnLog2">
                    Facebook
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    onClick={() => Out()}
                    className="btnLog3"
                  >
                    Google
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
