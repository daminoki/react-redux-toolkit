import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Mini Pig' },
    { id: '1', name: 'Capi Bara' },
    { id: '2', name: 'Blue Cat' },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;