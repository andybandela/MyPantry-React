import { createSlice, configureStore } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {expand: true},
    reducers:{
        toggleMenu(state){
            state.expand = !state.expand;
        }
    }
});


const store = configureStore({
    reducer: { toggle: toggleSlice.reducer}
});

export const toggleActions = toggleSlice.actions
export default store;