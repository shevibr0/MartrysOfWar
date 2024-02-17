import { createSlice } from "@reduxjs/toolkit";

let initilValue = {
    soliders: [],
    searchSoliders: []
}

const soliderSlice = createSlice({
    name: "solider",
    initialState: initilValue,
    reducers: {
        setSoliders: (state, action) => {
            state.soliders = action.payload;
        },
        setSearchSoliders: (state, action) => {
            state.searchSoliders = action.payload;
        }
    }
});

export const { setSoliders, setSearchSoliders } = soliderSlice.actions;
export default soliderSlice.reducer;