import React, { useState } from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import "./styles.css"

export const CheckoutForm = ({ differentAddressForm }) => {
    return (
        <div>
            <form>
                <div className="twoInputs">
                    <TextField id="standard-basic" label="First Name" required />
                    <TextField id="standard-basic" label="Last Name" required />
                </div>
                <div className="singleInput">
                    <TextField id="standard-basic" label="Company Name" />
                </div>
                <div className="singleInput">
                    <TextField
                        id="standard-multiline-static"
                        label="Address"
                        multiline
                        rows={4}
                        required
                    />
                </div>
                <div className="singleInput">
                    <FormControl className="select">
                        <InputLabel id="demo-simple-select-helper-label" required>City</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Karachi">Karachi</MenuItem>
                            <MenuItem value="Islamabad">Islamabad</MenuItem>
                            <MenuItem value="Lahore">Lahore</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="singleInput">
                    <TextField id="standard-basic" label="Postcode/ZIP" required />
                </div>
                {differentAddressForm ? (
                    <div>
                        <div className="singleInput">
                            <TextField id="standard-basic" label="Phone" required />
                        </div>
                        <div className="singleInput">
                            <TextField id="standard-basic" label="Email Address" required />
                        </div>
                    </div>
                ):null}
            </form>
        </div>
    )
}
