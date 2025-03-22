import { configureStore } from "@reduxjs/toolkit";
import modalReducer from './features/modal/modalSlice';
import presidentReducer from './features/president/presidentSlice';

export const store = configureStore ({
    reducer: {
        modal: modalReducer,
        president: presidentReducer
    }
});