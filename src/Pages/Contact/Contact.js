import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./Contact.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import pic from "./Capture.png";

const Contact = () => {
  return (
    <div>
      <div className="header">
        <h2>Contact</h2>
      </div>
      <div style={{ marginTop: "50px" }} className="main_contact">
        <div className="left_contact">
          <h4 style={{ color: "#f42f3a" }}>Contact Us</h4>
          <h1>Get in Touch</h1>
          <p>
            When, while lovely valley teems with vapour around meand
            <br />
            meridian the upper impenetrable .
          </p>
          <form id="contact_form">
            <TextField
              id="standard-basic"
              label="Your name"
              variant="standard"
              style={{ width: "100%", margin: "10px 5px" }}
            />
            <br />
            {/* <br /> */}
            <TextField
              id="standard-basic"
              label="Your email"
              variant="standard"
              style={{ width: "100%", margin: "10px 5px" }}
            />
            <br />
            <TextField
              id="outlined-textarea"
              label="Your message"
              //   placeholder="Placeholder"
                multiline
              style={{ width: "100%", margin: "10px 5px" }}
              rows={5}
            />
            <br />
            {/* <br /> */}
            <Button
              variant="contained"
              style={{
                background: "rgb(244,44,55)",
                color: "white",
                borderRadius: "30px",
                padding: "30px!important",
              }}
            >
              Shop By Category
            </Button>
          </form>
        </div>
        <div className="right_contact">
          <img src={pic} />
        </div>
      </div>

      <div style={{ margin: "50px 50px 10px -110px" }}>
        <Grid container>
          <Grid item md={4} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <Grid container>
              <Grid item md={6} sm={6} xs={6}>
                <img
                  src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_Email_254038.svg"
                  style={{ float: "right" }}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <p style={{ float: "left", marginLeft: "10px" }}>
                  <b>Email:</b>info@yourdomain.com
                  <br />
                  info@samplemail.com
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <Grid container>
              <Grid item md={6} sm={6} xs={6}>
                <img
                  src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_Phone_17950751.svg"
                  style={{ float: "right" }}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <p style={{ float: "left", marginLeft: "10px" }}>
                  <b>Phone:</b> +99 (0) 101 0000 888
                  <br />
                  +99 (0) 101 0000 888
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12} style={{ marginBottom: "20px" }}>
            <Grid container>
              <Grid item md={6} sm={6} xs={6}>
                <img
                  src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/noun_Location_19355641.svg"
                  style={{ float: "right" }}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={6}>
                <p style={{ float: "left", marginLeft: "10px" }}>
                  <b>Address :</b> Patricia C. 4401 Waldeck
                  <br />
                  Street Grapevine Nashville, Tx 76051
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Contact;
