import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connectedUser: null,
    users: []
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setConnectedUser: (state, action) => {
            state.connectedUser = action.payload;
        },
        setUnConnectedUser: (state, action) => {
            state.connectedUser = null;
        }
    }
});

export const { setConnectedUser, setUnConnectedUser } = userSlice.actions;
export default userSlice.reducer;