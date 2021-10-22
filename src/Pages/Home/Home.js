import React from "react";
import { Card } from "react-bootstrap";
import { Button, Grid } from "@material-ui/core";
import "./Home.css";
import "./cards.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import bestSellerProducts from "../../data/bestSellerProducts";

const Home = () => {
  return (
    <div>
      <div
        className="card"
        style={{
          background: "rgba(211,211,211,0.4)",
          maxHeight: "800px",
          margin: "2% 2%",
          borderRadius: "30px",
        }}
      >
        <div className="card-body" style={{ "marginTop": "10%" }}>
          <div style={{ float: "left", "marginLeft": "7%" }}>
            <p
              className="card-text"
              id="beats"
              style={{
                "fontSize": "3vw",
                fontFamily: "poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              Beats Solo
            </p>
            <p
              className="card-text"
              id="wire"
              style={{ fontSize: "5vw", fontWeight: "800", lineHeight: "40%" }}
            >
              Wireless
            </p>
            <div style={{ position: "relative" }}>
              <div style={{ float: "center" }}>
                <img
                  src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/Group_1271-1.png"
                  style={{
                    position: "absolute",
                    width: "90%",
                    bottom: "0",
                    marginLeft: "13%",
                    maxHeight: "2000px",
                    height: "auto",
                    top: "10",
                  }}
                />
              </div>
              <p
                id="headphone"
                style={{
                  fontWeight: "900",
                  color: "white",
                  zIndex: "-1",
                  fontSize: "11vw",
                }}
              >
                HEADPHONES
              </p>
            </div>
            <Button variant="contained" style={{"background": "rgb(244,44,55)","color":"white","borderRadius":"30px"}}>Shop By Category</Button>
          </div>
        </div>
      </div>
      <div className="first-row">
        <div className="short-card" id="card1">
          <div className="card-content">
            <h6>Enjoy</h6>
            <h3>With</h3>
            <p>EARPHONE</p>
            <Button variant="contained" style={{"background": "rgb(244,44,55)","color":"white","borderRadius":"30px"}}>Browse</Button>
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Mask-Group-5-1.png"
            id="img1"
          />
        </div>
        <div className="short-card" id="card2">
          <div className="card-content">
            <h6>New</h6>
            <h3>Wear</h3>
            <p>GADGETS</p>
            <Button variant="contained" style={{"background": "white","color":"rgb(254,198,46)","borderRadius":"30px"}}>Browse</Button>
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/clay-apple-watch-mockup-07.png"
            id="img2"
          />
        </div>
        <div className="long-card" id="longCard1">
          <div className="card-content">
            <h6>Trend</h6>
            <h3>Device</h3>
            <p>LAPTOP</p>
            <Button variant="contained" style={{"background": "white","color":"rgb(244,44,55)","borderRadius":"30px"}}>Browse</Button>
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Laptop.png"
            id="img3"
          />
        </div>
      </div>
      <div className="second-row">
        <div className="long-card" id="longCard2">
          <div className="card-content">
            <h6>Best</h6>
            <h3>Gaming</h3>
            <p>CONSOLE</p>
            {/* <button className="button1">Browse</button> */}
            <Button variant="contained" style={{"background": "rgb(244,44,55)","color":"white","borderRadius":"30px"}}>Browse</Button>
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/NicePng_ps4-png_193822.png"
            id="img4"
          />
        </div>
        <div className="short-card" id="card3">
          <div className="card-content">
            <h6>Play</h6>
            <h3>Game</h3>
            <p>OCULUS</p>
            <Button variant="contained" style={{"background": "white","color":"#2dd06f","borderRadius":"30px"}}>Browse</Button>
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/man-wearing-virtual-reality-headset-at-home-D7AYCTV-2.png"
            id="img5"
          />
        </div>
        <div className="short-card" id="card4">
          <div className="card-content">
            <h6>New</h6>
            <h3>Amazon</h3>
            <p>SPEAKER</p>
            <Button variant="contained" style={{"background": "white","color":"#178bff","borderRadius":"30px"}}>Browse</Button>
          </div>
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/P6YUXW1.png"
            id="img6"
          />
        </div>
      </div>
      <table className="outer_table">
        <tr>
          <td>
            <table className="inner_table">
              <tr>
                <td>
                  <img
                    src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/noun_delivery_1095359.svg"
                    width="69"
                  />
                </td>
                <td>
                  <p>Free Shipping</p>
                  <p>Free Shipping on all order</p>
                </td>
              </tr>
            </table>
          </td>
          <td>
            <table className="inner_table">
              <tr>
                <td>
                  <img
                    src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/Group-995.svg"
                    width="49"
                    height="40"
                  />
                </td>
                <td>
                  <p>Online Support 24/7</p>
                  <p>Technical Support 24/7</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <Card
        className="promotion_cards"
        style={{
          "backgroundColor": "#f42c37",
          border: "0px solid #f42c37",
          overflow: "hidden",
        }}
      >
        <Card.Body>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <div className="wrapper">
                <div className="outer">
                  <div className="content">
                    <h4 style={{ color: "#f87b82" }}>20% OFF</h4>
                    <h1 style={{ color: "#ffffff", "fontSize": "65px" }}>
                      FINE
                      <br />
                      SALE
                    </h1>
                    <h4 style={{ color: "#f87b82" }}>15 Nov to 7 Dec</h4>
                  </div>
                  <img
                    src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/2.png"
                    id="img7"
                    style={{ overflow: "hidden!important" }}
                  ></img>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <h4 style={{ color: "#ffffff", margin: "40px 0px 0px 10px" }}>
                Beats Solo Air
              </h4>
              <h1
                style={{
                  color: "#ffffff",
                  "fontSize": "45px",
                  margin: "10px",
                }}
              >
                SUMMER SALE
              </h1>
              <h4 style={{ color: "#ffffff", margin: "10px" }}>
                Company that’s grown from 270 to 480 employees in the last 12
                months
              </h4>
              <Button variant="contained" id="btn1">
                <a
                  href="./Shop.js"
                  style={{ textDecoration: "none", color: "#f42c37" }}
                >
                  Shop
                </a>
              </Button>
            </Grid>
          </Grid>
        </Card.Body>
      </Card>
      <div style={{ textAlign: "center", marginTop: "2%" }}>
        <h1>Best Seller Products</h1>
        <p style={{ color: "grey" }}>There are many variations passages</p>
      </div>
      <div className="bestSellerCards">
        {Object.entries(bestSellerProducts).map(
          ([item, { name, picture, price }]) => {
            return (
              <Card>
                <Card.Img
                  variant="top"
                  src={picture}
                  width="285"
                  height="213"
                />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Title style={{ fontWeight: "bold" }}>
                    {price}
                  </Card.Title>
                </Card.Body>
              </Card>
            );
          }
        )}
      </div>
      <Card
        className="promotion_cards"
        style={{ "backgroundColor": "#2cc96c", border: "0px solid #2cc96c" }}
      >
        <Card.Body>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <div className="wrapper">
                <div className="outer">
                  <div className="content">
                    <h4 style={{ color: "grey" }}>20% OFF</h4>
                    <h1 style={{ color: "#ffffff", "fontSize": "65px" }}>
                      HAPPY
                      <br />
                      HOURS
                    </h1>
                    <h4 style={{ color: "grey" }}>15 Nov to 7 Dec</h4>
                  </div>
                  <img
                    src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/O6CCQV1.png"
                    id="img8"
                  ></img>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <h4 style={{ color: "#ffffff", margin: "40px 0px 0px 10px" }}>
                Beats Solo Air
              </h4>
              <h1
                style={{
                  color: "#ffffff",
                  "fontSize": "45px",
                  margin: "10px",
                }}
              >
                SUMMER SALE
              </h1>
              <h4 style={{ color: "#ffffff", margin: "10px" }}>
                Company that’s grown from 270 to 480 employees in the last 12
                months
              </h4>
              <Button variant="contained" id="btn1">
                <a
                  href="./Shop.js"
                  style={{ textDecoration: "none", color: "#2CC96C" }}
                >
                  Shop
                </a>
              </Button>
            </Grid>
          </Grid>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Home;
