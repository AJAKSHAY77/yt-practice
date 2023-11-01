import { createSlice } from "@reduxjs/toolkit"

const appslice = createSlice({
    name: "app",
    initialState: {
        isMenuopen : true
    },
    reducers: {
        togglemenu: (state,actions) => {
            state.isMenuopen = !state.isMenuopen;
        },
        closemenu: (state) => {
            state.isMenuopen = false;
        }
    }
})
export const{togglemenu,closemenu} = appslice.actions 
export default appslice.reducer