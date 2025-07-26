import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export let getCharactorDetails = createAsyncThunk(
  "charactorDetails/getCharactorDetails",
  async (person_id) => {
    // جلب تفاصيل الشخص
    const detailsResponse = await fetch(`https://api.themoviedb.org/3/person/${person_id}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM",
      },
    });
    const detailsData = await detailsResponse.json();

    // جلب الأعمال (أفلام ومسلسلات)
    const creditsResponse = await fetch(`https://api.themoviedb.org/3/person/${person_id}/combined_credits`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDUwMGYzMTgyM2IzYmI5MmViZTkyMjA1OTQ1MjIwMSIsIm5iZiI6MTcyNTkyNzIwNy43MDcsInN1YiI6IjY2ZGY4ZjI3NjlkOWZjMzZmNzE1YTFhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4NdCEDmCkUXGZP7AfgEXbHcnFmT3SNZVLuv-tQM1pwM",
      },
    });
    const creditsData = await creditsResponse.json();

    return {
      details: detailsData,
      credits: creditsData,
    };
  }
);

let initialState = {
  Charactor: {
    details: null,
    credits: null,
  },
  isLoading: false,
  isError: null,
};

export let charDetails = createSlice({
  name: "charDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharactorDetails.fulfilled, (state, action) => {
      state.Charactor.details = action.payload.details;
      state.Charactor.credits = action.payload.credits;
    });
  },
});

export let charactorDetailsReducer = charDetails.reducer;
