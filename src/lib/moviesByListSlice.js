import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let getMoviesByGenre = createAsyncThunk('moviesByListSlice/getMoviesByGenre' , async ({genreId , type})=>{
    let response = await fetch(`https://api.themoviedb.org/3/discover/${type}?with_genres=${genreId}&language=en`,{
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    })
    let data = await response.json()
    console.log(data);
    
    return data
    
})
let initialState = {movie:[] , tv:[], isLoading:false , isError:null}
export let MovieByGenre = createSlice({
    name:'MovieByGenre',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getMoviesByGenre.fulfilled , (state , action )=>{
            const { type } = action.meta.arg
            state[type] = action.payload.results
        })
    }

    

})

export let MovieByGenreReducer =  MovieByGenre.reducer