import {createSlice} from 'redux-starter-kit';

const rfpSlice = createSlice({
  initialState,
  reducers: {
    fetchRFP: (state, action) => {
        state.isLoading = true;
    },
    fetchRFPSuccess: (state, action) => {
      state.rfp = action.payload.data;
      state.isLoading = false;
    },
    fetchRFPError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = rfpSlice;
// Extract and export each action creator by name
export const {fetchRFP, fetchRFPSuccess, fetchRFPError} = actions;

export default reducer;