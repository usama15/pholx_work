import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import "./styles.css";

export const BillingForm = ({ setBillingDetails, billingDetails }) => {
  return (
    <div>
      <form>
        <div className="twoInputs">
          <TextField
            id="standard-basic"
            label="First Name"
            required
            value={billingDetails["firstName"]}
            onChange={(event) =>
              setBillingDetails({
                ...billingDetails,
                firstName: event.target.value,
              })
            }
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            required
            value={billingDetails["lastName"]}
            onChange={(event) =>
              setBillingDetails({
                ...billingDetails,
                lastName: event.target.value,
              })
            }
          />
        </div>
        <div className="singleInput">
          <TextField
            id="standard-basic"
            label="Company Name"
            value={billingDetails["compName"]}
            onChange={(event) =>
              setBillingDetails({
                ...billingDetails,
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
            value={billingDetails["address"]}
            onChange={(event) =>
              setBillingDetails({
                ...billingDetails,
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
              value={billingDetails["city"]}
              onChange={(event) =>
                setBillingDetails({
                  ...billingDetails,
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
            value={billingDetails["postalCode"]}
            onChange={(event) =>
              setBillingDetails({
                ...billingDetails,
                postalCode: event.target.value,
              })
            }
          />
        </div>
        <div>
          <div className="singleInput">
            <TextField
              id="standard-basic"
              label="Phone"
              required
              value={billingDetails["phone"]}
              onChange={(event) =>
                setBillingDetails({
                  ...billingDetails,
                  phone: event.target.value,
                })
              }
            />
          </div>
          <div className="singleInput">
            <TextField
              id="standard-basic"
              label="Email Address"
              required
              value={billingDetails["email"]}
              onChange={(event) =>
                setBillingDetails({
                  ...billingDetails,
                  email: event.target.value,
                })
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
};
