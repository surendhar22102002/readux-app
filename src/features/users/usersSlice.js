import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Surendhar" },
    { id: "1", name: "Sudharsan" },
    { id: "2", name: "Saraswathi" },
];

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});


export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;