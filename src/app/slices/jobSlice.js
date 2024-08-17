import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  isLOading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLOading = true;
    },
    setError: (state, action) => {
      (state.isLOading = false), (state.error = action.payload);
    },
    setJobs: (state, action) => {
      state.isLOading = false;
      state.error = null;
      state.jobs = action.payload;
    },
    createJobs: (state, action) => {
      console.log(action);
    },
  },
});

export default jobSlice.reducer;
export const { setLoading, setError, setJobs, createJobs } = jobSlice.actions;
