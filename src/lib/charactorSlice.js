import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let getAllCharactor = createAsyncThunk('charactorSlice/getAllCharactor' , async ({page})=>{
    let response = await fetch(`https://api.themoviedb.org/3/person/popular?page=${page}`,{
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    })
    let data = await response.json()
    console.log(data);
    
    return data
    
})
let initialState = {Charactor:[] , isLoading:false , isError:null}
export let Charactor = createSlice({
    name:'Charactor',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCharactor.fulfilled , (state , action )=>{
            state.Charactor = action.payload
        })
    }

    

})

export let charactorReducer =  Charactor.reducer