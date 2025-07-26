import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let getList = createAsyncThunk('listSlice/getList' , async (type)=>{
    let response = await fetch(`https://api.themoviedb.org/3/genre/${type}/list`,{
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    })
    let data = await response.json()
    
    return data
    
})
let initialState = {tv:[] , movie:[], isLoading:false , isError:null}
export let list = createSlice({
    name:'list',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getList.fulfilled , (state , action )=>{
            const type = action.meta.arg
            state[type] = action.payload.genres
        })
    }

    

})

export let listReducer =  list.reducer