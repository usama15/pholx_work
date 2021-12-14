
import React, {useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import db from '../../database/firebase'
import {
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment } from '@material-ui/core';
import { Input } from '@material-ui/core';
// import DatePicker from '@mui/lab/DatePicker';
import Paper from '@material-ui/core/Paper';


const Register = () => {
  const [disable, setDisable] = useState(true);
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([])
  const [values, setValues] = useState({
    email: "",
    password: "",
    phone: "",
    fullname: "",
    showPassword: false,
  });

  const SignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setDoc(doc(db, "userData", user.uid), {
          email: values.email,
          phone: values.phone,
          fullname: values.fullname,
          Gender: gender,
          date: dob.toLocaleDateString(),
        })
        setData(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  };
  console.log(data.uid)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
    setDisable(false);
  };

  return (
    <div className="divLog">
      <div className="divHead">
        <h1>Create your Jaymart Account</h1>
        <p>
          Already member?
          <Link className="linkReg" to="/Login">
            Login
          </Link>{" "}
          here.
        </p>
      </div>
      <div className="divForm">
        <Box>
          <Grid className="grid" container spacing={0} columns={12}>
            <Grid className="inputGrid" item xs={6}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="standard-textarea"
                    label="Please enter your Email"
                    variant="standard"
                    onChange={handleChange("email")}
                  />
                </div>
                <div>
                  <TextField
                    id="standard-number"
                    label="Number"
                    type="number"
                    variant="standard"
                    onChange={handleChange("phone")}
                  />
                </div>
              </Box>
              <Box>
                <div>
                  <FormControl sx={{ m: 1, width: "30ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      Please enter your Password
                    </InputLabel>
                    <Input
                      id="standard-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      endAdornment={
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
                    />
                  </FormControl>
                </div>
                <br />
                <div className="datePick">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    {/* <DatePicker
                      views={["day", "month", "year"]}
                      label="Birthday"
                      value={dob}
                      onChange={(newValue) => {
                        setDob(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} helperText={null} />
                      )}
                    /> */}
                  </LocalizationProvider>
                </div>
                <div className="Gender">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={gender}
                      onChange={handleChangeGender}
                      label="Gender"
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Box>
            </Grid>
            <Grid className="btnGrid" item xs={6}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="emailGrid-Div">
                  <TextField
                    className="emailGridDiv"
                    id="standard-textarea"
                    label="Please enter first and last name"
                    variant="standard"
                    onChange={handleChange("fullname")}
                  />
                </div>
                <div className="divCheck">
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeChecked}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <span className="checkSpan">
                    I want to receive exclusive offers and promotions from
                    Jaymart.
                  </span>
                </div>
              </Box>

              <Paper spacing={2} direction="row">
                <Button
                  variant="contained"
                  disabled={disable}
                  className="btnLog"
                  onClick={() => SignUp()}
                >
                  SIGN UP
                </Button>
              </Paper>
              <p className="signPera">
                By clicking “SIGN UP”, I agree to Jaymart's Terms of Use and
                Privacy Policy
              </p>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );

              }



export default Register;