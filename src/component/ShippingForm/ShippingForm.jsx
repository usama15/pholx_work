import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

export const ShippingForm = ({ setShippingDetails, shippingDetails }) => {
  return (
    <div>
      <form>
        <div className="twoInputs">
          <TextField
            id="standard-basic"
            label="First Name"
            required
            value={shippingDetails["firstName"]}
            onChange={(event) =>
              setShippingDetails({
                ...shippingDetails,
                firstName: event.target.value,
              })
            }
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            required
            value={shippingDetails["lastName"]}
            onChange={(event) =>
              setShippingDetails({
                ...shippingDetails,
                lasttName: event.target.value,
              })
            }
          />
        </div>
        <div className="singleInput">
          <TextField
            id="standard-basic"
            label="Company Name"
            value={shippingDetails["compName"]}
            onChange={(event) =>
              setShippingDetails({
                ...shippingDetails,
                compName: event.target.value,
              })
            }
          />
        </div>
        <div className="singleInput">
          <TextField
            id="standard-multiline-static"
            label="Address"
            multiline
            rows={4}
            required
            value={shippingDetails["address"]}
            onChange={(event) =>
              setShippingDetails({
                ...shippingDetails,
                address: event.target.value,
              })
            }
          />
        </div>
        <div className="singleInput">
          <FormControl className="select">
            <InputLabel id="demo-simple-select-helper-label" required>
              City
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={shippingDetails["city"]}
              onChange={(event) =>
                setShippingDetails({
                  ...shippingDetails,
                  city: event.target.value,
                })
              }
            >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Karachi">Karachi</MenuItem>
              <MenuItem value="Islamabad">Islamabad</MenuItem>
              <MenuItem value="Lahore">Lahore</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="singleInput">
          <TextField
            id="standard-basic"
            label="Postcode/ZIP"
            required
            value={shippingDetails["postalCode"]}
            onChange={(event) =>
              setShippingDetails({
                ...shippingDetails,
                postalCode: event.target.value,
              })
            }
          />
        </div>
      </form>
    </div>
  );
};

