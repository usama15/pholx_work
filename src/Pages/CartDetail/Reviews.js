import React, { useState } from "react";
import Rating from "material-ui-rating";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Description from "./Description";
import { useLocation } from "react-router-dom";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  roots: (props) => ({
    flexGrow: 1,
    backgroundColor: props.backgroundColor,
    color: theme.color,
    width: "100%",
    justifyContent: "center",
  }),
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
  reviews: {
    ["@media (max-width:550px)"]: {
      flexDirection: "column",
      height: "275px!important",
    },
  },
  rating: {
    ["@media (max-width:550px)"]: {
      width: "100%!important",
      marginTop: "10px",
      marginBottom: "0px"
    }
  },
  review: {
    ["@media (max-width:550px)"]: {
      width: "100%!important",
    }
  }
}));

const Reviews = () => {
  const location = useLocation();
  const image =
    "https://www.freeiconspng.com/uploads/person-icon-user-person-man-icon-4.png";
  const classes = useStyles();
  const [incre, setIncre] = useState(0);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const increment = () => {
    setIncre(incre + 1);
  };
  return (
    <>
      <div className={classes.roots}>
        <AppBar
          position="static"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            style={{}}
            fullWidth={true}
            centered
          >
            <Tab
              label="Description"
              {...a11yProps(0)}
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
            />
            <Tab
              label="Reviews"
              {...a11yProps(1)}
              style={{ color: "black", fontWeight: "bold", fontSize: "20px" }}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Description />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div
            style={{
              marginTop: "40px",
              width: "100%",
              // padding: "25px 0px",
              height: "auto",
            }}
          >
            <div style={{ margin: "0px 24vw" }}>
              <h3
                style={{
                  color: "black",
                  fontWeight: "bold",
                  lineHeight: "80px",
                }}
              >{`1 review for ${location.state.detail.name}`}</h3>
              <div
                style={{
                  backgroundColor: "lightgray",
                  width: "50vw",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  borderRadius: "20px",
                  height: "auto"
                }}
                className={classes.reviews}
              >
                <div style={{ width: "70%", height: "180px", display: "flex"}} className={classes.review}>
                  <div style={{ width: "100px", height: "180px" }}>
                    <img
                      style={{ width: "80px", height: "80px" }}
                      src={image}
                    />
                  </div>
                  <div
                    style={{ width: "200px", height: "180px", padding: "10px" }}
                  >
                    <p style={{ color: "grey" }}>
                      <span style={{ color: "black", fontWeight: "bold" }}>
                        Paul
                      </span>{" "}
                      – October 7, 2019
                    </p>
                    <p>hello</p>
                    <button
                      style={{
                        backgroundColor: "grey",
                        border: "none",
                        padding: "5px",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                      onClick={() => increment()}
                    >
                      <ThumbUpAltIcon />
                    </button>
                    <button
                      style={{
                        backgroundColor: "grey",
                        border: "none",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      {incre}
                    </button>
                  </div>
                </div>
                <div style={{ width: "30%", height: "180px" }} className={classes.rating}>
                  <Rating
                    value={5}
                    max={5}
                    onChange={(value) =>
                      console.log(`Rated with value ${value}`)
                    }
                  />
                </div>
              </div>
            </div>
            <h3
              style={{
                color: "black",
                fontWeight: "bold",
                lineHeight: "50px",
                marginTop: "50px",
              }}
            >
              Add a review
            </h3>
            <p style={{ color: "black", lineHeight: "25px", fontSize: "18px"}}>
              {" "}
              Your email address will not be published. Required fields are
              marked *
            </p>
            <h4
              style={{ color: "black", fontWeight: "bold", lineHeight: "50px" }}
            >
              Your rating *
              <Rating
                value={3}
                max={5}
                onChange={(value) => console.log(`Rated with value ${value}`)}
              />
            </h4>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <div style={{ width: "48%", height: "100px" }}>
                <label
                  style={{
                    color: "black",
                    fontSize: "20px",
                    lineHeight: "50px",
                  }}
                >
                  Name *{" "}
                </label>
                <br />
                <input
                  type="text"
                  style={{
                    borderRadius: "50px",
                    textAlign: "start",
                    padding: "20px",
                    width: "100%",
                    border: "none",
                    outline: "none",
                    height: "50px",
                    backgroundColor: "lightgray",
                    color: "black",
                  }}
                />
              </div>
              <div style={{ width: "48%", height: "100px" }}>
                <label
                  style={{
                    color: "black",
                    fontSize: "20px",
                    lineHeight: "50px",
                  }}
                >
                  Email *{" "}
                </label>
                <br />
                <input
                  type="text"
                  style={{
                    borderRadius: "50px",
                    textAlign: "start",
                    padding: "20px",
                    width: "100%",
                    border: "none",
                    outline: "none",
                    height: "50px",
                    backgroundColor: "lightgray",
                    color: "black",
                  }}
                />
              </div>
            </div>
            <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
              <label
                style={{ color: "grey", fontSize: "20px", lineHeight: "50px" }}
              >
                Reviews *
              </label>
              <br />
              <textarea
                style={{
                  borderRadius: "50px",
                  textAlign: "start",
                  padding: "20px",
                  width: "100%",
                  border: "none",
                  outline: "none",
                  height: "300px",
                  backgroundColor: "lightgray",
                  color: "black",
                }}
              ></textarea>
            </div>
            <div style={{ width: "100%", height: "100px",margin: "0px 0px"}}>
              <button
                style={{
                  display: "block",
                  fontSize: "20px",
                  width: "200px",
                  borderRadius: "50px",
                  padding: "10px",
                  paddingLeft: "10px",
                  margin: "10px auto",
                  border: "none",
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "normal",
                  float: "right",
                }}
              >
                Add review
              </button>
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default Reviews;
