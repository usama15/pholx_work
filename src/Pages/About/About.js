import { Grid } from "@material-ui/core";
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div className="header">
        <h2>About</h2>
      </div>
      {/* <div style={{ margin: "50px" }}>
        <Grid container>
          <Grid item md={6} sm={6} xs={12} id="info">
            <h4 style={{ color: "#f42f3a" }}>Welcome To Pholx</h4>
            <h1>Who We are?</h1>
            <p>
              When, while the lovely valley teems with vapour around me, and the
              <br />
              meridian sun strikes the upper surface of the impenetrable foliage
              of my
              <br />
              trees, and but a few stray
            </p>
            <p>
              gleams steal into the inner sanctuary, I throw myself down among
              the tall
              <br />
              grass by the trickling stream; and, as I lie close to the earth, a
              thousand
              <br /> unknown plants are noticed by me .<br />
              when I hear the buzz of the little world among the stalks, and
              grow familiar
              <br />
              with the countless indescribable forms of the insects and flies,
              then I feel
              <br />
              the presence .
            </p>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <img
              src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.jpg"
              width="650"
              style={{ borderRadius: "10px" }}
            />
          </Grid>
        </Grid>
      </div> */}
      <div className="main_about">
        <div className="left_about">
          <h4 style={{ color: "#f42f3a" }}>Welcome To Pholx</h4>
          <h1>Who We are?</h1>
          <p>
            When, while the lovely valley teems with vapour around me, and the
            <br />
            meridian sun strikes the upper surface of the impenetrable foliage
            of my
            <br />
            trees, and but a few stray
          </p>
          <p>
            gleams steal into the inner sanctuary, I throw myself down among the
            tall
            <br />
            grass by the trickling stream; and, as I lie close to the earth, a
            thousand
            <br /> unknown plants are noticed by me .<br />
            when I hear the buzz of the little world among the stalks, and grow
            familiar
            <br />
            with the countless indescribable forms of the insects and flies,
            then I feel
            <br />
            the presence .
          </p>
        </div>
        <div className="right_about">
          <img
            src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.jpg"
            width="650"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};
