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
import { ProductCard } from "../../component/ProductCard/ProductCard";
import { CustomDialog } from "../../component/Dialog/Dialog";

export const Shop = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [dataExpanded, setDataExpanded] = useState(false);
  const [products, setProducts] = useState(bestSellerProducts);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const changeArrow = () => {
    setDataExpanded(!dataExpanded);
  };
  useEffect(() => {
    const showData = collection(db, "product");
    const getData = onSnapshot(showData, async (snapshot) => {
      console.log(data);
      const datas = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(datas);
      setSearchedData(datas);
      console.log(datas);
    });
    return getData;
  }, []);
  const searchProducts = () => {
    const prds = [];
    const nameLength = search.length;
    data.map((product) => {
      if (product.name.slice(0, nameLength) == search.slice(0, nameLength)) {
        prds.push(product);
      }
    });
    if (prds.length == 0) {
      handleClickOpen();
    } else {
      setSearchedData(prds);
    }
  };
  const resetToDefault = () => {
    setSearch("");
    setSearchedData(data);
  };
  const clickMe = (val) => {
    history.push({ pathname: "/cartdetail", state: { detail: val } });
  };
  return (
    <div>
      <div className="header">
        <h2>Products</h2>
      </div>
      <CustomDialog text="No Product Found" open={open} onClose={handleClose} />
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
              <ClearIcon
                onClick={() => resetToDefault()}
                style={{
                  marginTop: "65px",
                  zIndex: "5",
                  position: "relative",
                  right: 30,
                }}
              />
            ) : null}
            <Button
              variant="contained"
              z
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
            {searchedData.length == 0 ? (
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
            ) : search == "" ? (
              data.map((val) => (
                <ProductCard product={val} addProdFunc={addCart} viewDetailsFunc={clickMe}/>
              ))
            ) : (
              searchedData.map((val) => (
                <ProductCard product={val} addProdFunc={addCart} viewDetailsFunc={clickMe}/>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
