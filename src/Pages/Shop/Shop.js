import React, { useState, useEffect } from "react";
import "./Shop.css";
import { Grid, TextField, Button, CircularProgress } from "@material-ui/core";
import { Card } from "react-bootstrap";
import InstagramIcon from "@material-ui/icons/Instagram";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import bestSellerProducts from "../../data/bestSellerProducts";
import ClearIcon from "@material-ui/icons/Clear";
import CartDetail from "../CartDetail/Detail";
import { useHistory, useLocation } from "react-router-dom";
import db from "../../database/firebase";
import { onSnapshot, collection, doc } from "@firebase/firestore";
import { useLcation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../Store/Reducers/AddToCart";
import { SkeletonCard } from "../../component/SkeletonCard/SkeletonCard";

export const Shop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState([]);
  const [dataExpanded, setDataExpanded] = useState(false);
  const [products, setProducts] = useState(bestSellerProducts);
  const [search, setSearch] = useState("");
  const changeArrow = () => {
    setDataExpanded(!dataExpanded);
  };

  useEffect(() => {
    const showData = collection(db, "product");
    const getData = onSnapshot(showData, async (snapshot) => {
      console.log(data);
      const datas = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(datas);
      console.log(datas);
    });
    return getData;
  }, []);

  const searchProducts = () => {
    const prds = [];
    const nameLength = search.length;
    data.map((product) => {
      if (product.name.slice(0,nameLength) == search.slice(0,nameLength)) {
        prds.push(product);
      }
    });
    if (prds.length == 0) {
      alert("No Product Found");
    } else {
      setData(prds);
    }
  };
  const resetToDefault = () => {
    setSearch("");
    setProducts(bestSellerProducts);
  };

  const clickMe = (val) => {
    history.push({ pathname: "/cartdetail", state: { detail: val } });
    // console.log(val);
  };

  return (
    <div>
      <div className="header">
        <h2>Products</h2>
      </div>
      {/* <Grid container>
        <Grid item md="3" sm="12" xs="12">
          <div>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              style={{ margin: "50px 0px 20px 5%" }}
            />
            {search != "" ? (
              <ClearIcon onClick={() => resetToDefault()} />
            ) : null}
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "60px", borderRadius: "10px" }}
            >
              <SearchIcon />
            </Button>
          </div>
          <h3 style={{ margin: "0px 10%", display: "inline" }}>
            Product Categories
          </h3>
          <button
            style={{ background: "white", border: "none" }}
            onClick={() => changeArrow()}
          >
            {dataExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
          {dataExpanded ? (
            <div
              id="dataExpanded"
              style={{ textAlign: "center", margin: "30px" }}
            >
              <p>Earphone</p>
              <p>Gadgets</p>
              <p>Gaming</p>
              <p>Headphone</p>
              <p>Laptop</p>
              <p>Speaker</p>
              <p>Uncategorized</p>
            </div>
          ) : null}
          <Button
            id="filter"
            variant="contained"
            color="secondary"
            style={{ marginTop: "25px", borderRadius: "10px" }}
          >
            Filter
          </Button>
        </Grid>
        <Grid item md="9" sm="12" xs="12">
          <h1 style={{ margin: "50px 0px 0px 15%", textAlign: "center" }}>
            Shop
          </h1>
          <Grid container style={{ margin: "0px 0px 50px 10%" }} spacing={4}>
            {Object.entries(products).map(
              ([item, { name, picture, price }]) => {
                return (
                  <Grid
                    item
                    md={3}
                    xs={12}
                    sm={5}
                    style={{ margin: "10px 0px 10px 30px" }}
                  >
                    <Card>
                      <Card.Img
                        variant="top"
                        src={picture}
                        style={{ borderRadius: "5%" }}
                        width="250"
                        height="250"
                      />
                      <Card.Body style={{ marginTop: "10px" }}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title style={{ fontWeight: "bold" }}>
                          {price}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Grid>
      </Grid> */}
      <div className="main_shop">
        <div className="left">
          <div className="textField">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              style={{ margin: "50px 0px 10px 0px" }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            {search != "" ? (
              <ClearIcon onClick={() => resetToDefault()} style={{"marginTop": "65px","zIndex": "5","position":"relative","right":30}} />
            ) : null}
            <Button
              variant="contained"z
              color="secondary"
              style={{
                marginTop: "45px",
                borderRadius: "10px",
                height: "60px",
              }}
              onClick={() => searchProducts()}
            >
              <SearchIcon />
            </Button>
          </div>
          <div className="categories_wrapper">
            <h3>Product Categories</h3>
            <button
              style={{ background: "white", border: "none" }}
              onClick={() => changeArrow()}
            >
              {dataExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          </div>
          {dataExpanded ? (
            <div
              id="dataExpanded"
              style={{ textAlign: "center", margin: "30px" }}
            >
              <p>Clothes / apparel</p>
              <p>Jewellery</p>
              <p>Accessories</p>
              <p>Boxes / packing</p>
              <p>Watches</p>
              <p>Electrical</p>
              <p>Electronic</p>
              <p>Beauty Care</p>
              <p>Food and beverage</p>
              <p>Health medical</p>
              <p>Good supplies</p>
              <p>Shoe item</p>
              <p>Modified and custom</p>
              <p>Sports goods</p>
            </div>
          ) : null}
          <hr style={{ marginLeft: "10px" }} />
          <Button
            id="filter"
            variant="contained"
            color="secondary"
            style={{ borderRadius: "10px" }}
          >
            Filter
          </Button>
        </div>
        <div className="right">
          <h1 style={{ margin: "50px 0px 0px 0%", textAlign: "center" }}>
            Shop
          </h1>
          <div className="bestSellerCards">
            {data.length == 0 ? (
              <>
                <div>
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
                <div>
                  <SkeletonCard />
                  <SkeletonCard />
                </div>
              </>
            ) : (
              data.map((val) => (
                <Card style={{width: "300px"}}>
                  <Card.Img
                    variant="top"
                    src={val.image}
                    width="100%"
                    height="212"
                    // onClick={() => console.log(val.image)}
                    onClick={() => clickMe(val)}
                  />
                  <Card.Body>
                    <Card.Title>{val.name}</Card.Title>
                    <Card.Title style={{ fontWeight: "bold" }}>
                      {val.price}
                    </Card.Title>
                    <Button
                      variant="contained"
                      className="addBtn"
                      onClick={() => dispatch(addCart(val))}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              ))
            )}

            {/* {Object.entries(bestSellerProducts).map(
              ([item, { name, picture, price }]) => {
                return (
                  <Card>
                    <Card.Img
                      variant="top"
                      src={picture}
                      width="100"
                      height="212"
                    />
                    <Card.Body>
                      <Card.Title>{name}</Card.Title>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        {price}
                      </Card.Title>
                      <Button variant="contained" className="addBtn">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                );
              }
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
