import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let getAllMovies = createAsyncThunk('moviesSlice/getAllMovies' , async ({type , page=1})=>{
    let response = await fetch(`https://api.themoviedb.org/3/${type}/popular?page=${page}`,{
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    })
    let data = await response.json()
    return {data , type}
    
})
let initialState = {movie:[] , tv:[], isLoading:false , isError:null}
export let movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllMovies.fulfilled , (state , action )=>{
             const { type, data } = action.payload;
  state[type] = data;
        })
    }

    

})

export let moviesReducer =  movieSlice.reducer