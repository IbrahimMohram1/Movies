import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./moviesSlice";
import {  topRatedReducer } from "./topRatedSlice";
import { listReducer } from "./listSlice";
import {MovieByGenreReducer} from './moviesByListSlice'
import { charactorReducer } from "./charactorSlice";
import { detailsReducer } from "./details.slice";
import { charactorDetailsReducer } from "./charactorDetailsSlice";
export let store = configureStore({
    reducer: {
        movies : moviesReducer,
        topRated:topRatedReducer,
        list:listReducer,
        moviebygenre:MovieByGenreReducer,
        charactor:charactorReducer,
        details:detailsReducer,
        chardetails:charactorDetailsReducer

    }
})