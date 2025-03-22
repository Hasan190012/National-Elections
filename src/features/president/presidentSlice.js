import { createSlice } from "@reduxjs/toolkit";
import President from "../../components/onePresident/President";
import presidents from "../../assets/presidential.json";

const  initialState = {
    presidents : JSON.parse(window.localStorage.getItem('presidents')) || presidents,
    currentPresident: null,
    voteCount: 0,
};

const presidentSlice = createSlice ({
    name : "president",
    initialState,
    reducers : {
        setCurrentPresident: (state, action) => {
            state.currentPresident = action.payload;
        },
        increaseVote : (state) => {
            state.voteCount = state.voteCount + 1;
        },
        dicreaseVote : (state) => {
            state.voteCount = state.voteCount - 1;
        },
        addNumberOfVotes : (state, action) => {
            let compIndex = state.presidents.findIndex(pre => pre.id === action.payload);

            state.presidents[compIndex].numberOfVotes = Number(state.presidents[compIndex].numberOfVotes) + Number(state.voteCount);
            window.localStorage.setItem('presidents', JSON.stringify(state.presidents));
        },
        resetState : (state) => {
            state.currentPresident  = null;
            state.voteCount = 0;
        }
    }
});

export default presidentSlice.reducer;
export const {setCurrentPresident,increaseVote,dicreaseVote,addNumberOfVotes,resetState} = presidentSlice.actions;