import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    UserData : []
}

const UserReducer = createSlice({
    name: 'userData',
    initialState: {
        initialUserState
    },
    reducers: {
        addUserData: (state , {payload}) => {
            state.initialUserState = payload;
        }
    }

})

export default UserReducer.reducer ;
export const {addUserData} = UserReducer.actions;