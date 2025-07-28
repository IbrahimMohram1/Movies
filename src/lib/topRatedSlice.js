import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let getTopRated = createAsyncThunk('topRatedSlice/getTopRated' , async ()=>{
    let response = await fetch('https://api.themoviedb.org/3/movie/top_rated',{
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    })
    let data = await response.json()
    return data
    
})
let initialState = {topRated:[] , isLoading:false , isError:null}
export let topRated = createSlice({
    name:'topRated',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getTopRated.fulfilled , (state , action )=>{
            state.topRated = action.payload.results
                        state.isLoading = false

        })
        builder.addCase(getTopRated.pending , (state)=>{
            state.isLoading = true

        })
    }

    

})

export let topRatedReducer =  topRated.reducer