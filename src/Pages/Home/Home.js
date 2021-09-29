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
        <div className="card-body" style={{ "margin-top": "18%" }}>
          <div style={{ float: "left", "margin-left": "7%" }}>
            <p
              className="card-text"
              id="beats"
              style={{
                "font-size": "3vw",
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
          "background-color": "#f42c37",
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
                    <h1 style={{ color: "#ffffff", "font-size": "65px" }}>
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
                  "font-size": "45px",
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
        style={{ "background-color": "#2cc96c", border: "0px solid #2cc96c" }}
      >
        <Card.Body>
          <Grid container>
            <Grid item xs={12} sm={6} md={6}>
              <div className="wrapper">
                <div className="outer">
                  <div className="content">
                    <h4 style={{ color: "grey" }}>20% OFF</h4>
                    <h1 style={{ color: "#ffffff", "font-size": "65px" }}>
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
                  "font-size": "45px",
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
      <div style={{ marginTop: "10px" }} className="footer">
        <div>
          <img src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/logotype.png" />
          <p style={{ color: "grey", margin: "20px 0px 10px 0px" }}>
            There are many variations
            <br />
            passages of Lorem Ipsum
            <br />
            available, but the majority have
          </p>
          <InstagramIcon style={{ marginRight: "10px" }} />
          <img
            style={{ marginRight: "10px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAD09PT5+fklJSU6Ojqfn59tbW3u7u7BwcHx8fHKysrb29vp6eni4uKcnJyKioq5ubmsrKwfHx/Hx8fU1NSDg4OmpqY+Pj6zs7MODg6Li4thYWG7u7tMTEw0NDRVVVVdXV12dnYTExMaGho9PT2Tk5MrKytHR0cNv3QlAAAEhElEQVR4nO2diXaqMBRFi1hnQKmgOGv71P//wqeiHZQkN5H2Jllnf0DW2Qsk8/XlBQAAAAAAAMBN1O8mSdLqZg3uJL9CP28Gn6yTmDtPzYST9+CO1Zg7VJ2kb/d+Z44Zd6666K2q/M7k3NHqoSvyO/8eO9zpaiCVCAbB+4A739MUUsETrn9UZa9oycztzjFSCgbBhjvkU2wIhkGLO+UTjCiCQRBx5zSHJhi0uXMaMyEauvsQp1RDV8c2A6pgEHBHNWRIN+xzZzVDOOB+ZM+d1YgGXTDYcIc1ItYwXIfcaU0gdvclTvYX8mnTHU7OMBLvDVveGyrnvs4bjjUEP5xcr+lpGE65wxoRPiwCi3F0/tSmGxbcWc3Q6BCd/NDQlqFK/nFHNWXh+UtKnwLPuIOaQ1pMDIKUO6c5tF/ikTvmM5DGpm5vI27VghPujM8RHlSCjg5nvgibcsEFd8Dn6UnXhXfc8eog3IkFHe4nfiBak5q6v8V9I5zPHv0OvjzAkl5y93Pcjrgj1U88aX+Uduu86HGn+T0ij90AAAAAAAAAAADgKlEU3xhkWdYfj7vL5ahI03TSaiXJfr+fz4fDPCecvYzOfDbWvZK2JiWnZs7Mf9/pBz3qYYy1sqmQ2NIfWH2nodiy+ORV2VR9hp3+qNgP88Vi0R7mRfHcfVbLDMM4zSt3wl7ziaGnTYad5U6+z7fdG2wx2GM4blfsKjywHupKWmLYaFH0rkmW7hl25mS9Cx86+0UWGIZaB5VL1l2HDEeVd8iVLKinXbkNI+KBpQqIW3/MhuSbc1XQ7pqxGjbMH+CFDeWOC6dhRu8hBKwJwxxGQ4NP6ANH9VPkM5Scb9FgY61heDR1ukN5nInJMDbrBKtQdRo8hpmpThWKrp/FUOemjpqtfYZalx4JyMeof284Uxca0US+hMRgaGwiRHpRguEtrZ+D94bSUgF+GMqOafthGEhG4J4YShanPDGUvKaeGB7EsyhPDCXXP30xFK+g+mIoXpXyxVA8wfDFsCn81PhiKO7zvTEUFs/xxlB4ydUbQ+GCFLvh2yqfjJb97MJ4lO6mGqU6viGcBfMaLoqKsUiYzcmFAL8QFufkNMzFpbX62ns2Fho25UcOdFcc7TNU74xplAO00fCVsPWnUTvHQkPSqRidp2ib4ZAi+NJx2JB4RE2jApJlhuQaBsp6FrYakou90h+iZYZUQY36qnYZapRKIfcYdhlq1Osl7zXaZahRc5lcJNcuQ51ittSvqVWGM50imtRxjVWGWiWXcxcNVxqC5B7RKkPF8ZCfUM81WGWoVTmMOhN215B6fMpdQ2rlSncNqXNEGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIThXxpS/4zBWcOwKEbL81++jk/0T5yLbA4GgziOo6jT6TVCeiGS27/HXtq5MLjRu6EjVwbcJ2fSa9vXhrOy2bhsVKcaDAAAAAAAAKAu/gPAEXexUPZFzgAAAABJRU5ErkJggg=="
            width="20"
            height="25"
          />
          <img
            style={{ marginRight: "10px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABYWFjy8vJTU1Pm5ub39/cwMDBubm7q6upLS0tGRkb7+/vAwMDPz89ra2uVlZVeXl7V1dWfn58pKSnb29u7u7t7e3tlZWXHx8ewsLCQkJA6OjoPDw+lpaWbm5sbGxt+fn6GhoYxrr3TAAACsklEQVR4nO3cbVPaUBCG4UiIxRBBEQVRC/b//8jOVEms9eXkhJ19Nr3v78zs9QFyWEKKgoiIiIiIiIiIiIh8q+7vrjbbaV3P/1S/NH1t8tL1xHvMvJr7/fwsMe9ZMyp321RdSOFq1ocXT7ioe/qCCav+vljChwxfJGH1mAWMI7zM88UR/swFRhHus4FBhDf5wBjC3QBgCOFqCDCCsHkau7DvQTScMPtCGEXYrMcuHHKhCCFshgLlhVejFw4GqgvvRi+cjl1YDQeKC/O/FUYRXo9dWJ4AqC1cjF44YHcRRHiKt6G28BRAaeHwU7e6sNd+ZrNbXXyYt+KrehxKZ433sFmlLxFvvEfNLPm74cx70tw2qcLSe9LclonArfeg2aVe8Hfeg2Y3SRQuvAfNLlUofcn7slRh2A8ahAgDhBChfggR6ocQoX4IEeqHEKF+qbu2IBv9h/ZfZ+2/zw6Jwvcv/Kv5pbfsWOr6t3cywoH3yX6ezDbVTFh5y46ZCWU+h8yE3rA2K+HaG9ZmJZx6w9qshM/esDYroc5P/FZCnZ9PrYQyRxoz4a03rM1KeO4Na7MSeru6jIQHb1eXkbD2dnUZCYVuCDMS/vJ2dRkJ996uLiOhzpHGSiizwzATyuwwzIRC97zZCA9C+3Ab4aPMHspKqPS0Nhvh0pv1Jhuh0JHGSKizpbES6uwwrIRCRxojoc6Wpih6Pe0xOaEjTVFW7ytTHzdwe/HPa495q75p/HcqIESoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IUSoH0KE+iFEqB9ChPohRKgfQoT6IYwvTH32ZVzhcv0jpae4wuY8Le85iYiI/oN+Ax8gNcxZmandAAAAAElFTkSuQmCC"
            width="20"
            height="25"
          />
          <img
            style={{ marginRight: "10px" }}
            src="data:image/png;base64,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"
            width="20"
            height="25"
          />
        </div>
        <div>
          <h4 style={{ color: "black", "font-weight": "bold" }}>Contact</h4>
          <p style={{ color: "black", marginTop: "10px" }}>
            +99 (0) 101 0000 888 Patricia C.
          </p>
          <p style={{ color: "black", marginTop: "10px" }}>
            Amedee 4401 Waldeck Street
          </p>
          <p style={{ color: "black", marginTop: "10px" }}>
            Grapevine Nashville, Tx 76051
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;