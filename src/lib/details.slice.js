import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export let getDetails = createAsyncThunk('details/getDetails' , async ({type , id})=>{
    let response = await fetch(`https://api.themoviedb.org/3/${type}/${id}`,{
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    })
    let data = await response.json()
    
     const resCredits = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits`, {
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    });
    const credits = await resCredits.json();

  
     const resSimilar  = await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar`, {
        method: 'GET',
        headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM'}

    });
        const similar = await resSimilar.json();


        return { type, data, credits , similar:similar.results }; 

})
let initialState = {movie: { details: null, cast: [], crew: [] , similar:[] },
  tv: { details: null, cast: [], crew: [], similar:[] }, isLoading:false , isError:null}
export let detailSlice = createSlice({
    name:'detailSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDetails.fulfilled , (state , action )=>{
             const { type, data, credits , similar} = action.payload;
  state[type] = {
    details: data,
    cast: credits.cast,
    crew: credits.crew,
    similar: similar,

  };
        })
    }

    

})

export let detailsReducer =  detailSlice.reducer