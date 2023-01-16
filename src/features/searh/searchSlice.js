// import { createSlice } from '@reduxjs/toolkit';
// import { search } from '../../_helpers/search';

// const searchSlice = createSlice({
//   name: 'search',
//   initialState: {
//     query: '',
//     results: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setQuery: (state, action) => {
//       state.query = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(search.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(search.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.results = action.payload;
//       })
//       .addCase(search.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setQuery } = searchSlice.actions;

// export default searchSlice.reducer;
