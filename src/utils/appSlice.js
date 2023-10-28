import { createSlice } from "@reduxjs/toolkit"

const appslice = createSlice({
    name: "app",
    initialState: {
        isMenuopen : true
    },
    reducers: {
        togglemenu: (state,actions) => {
            state.isMenuopen = !state.isMenuopen;
        }
    }
})
export const{togglemenu} = appslice.actions 
export default appslice.reducer