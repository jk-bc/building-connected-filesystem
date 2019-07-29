import {createSlice} from 'redux-starter-kit';

const rfpSlice = createSlice({
  initialState,
  reducers: {
    createFolder: (state, action) => {
        state.isLoading = true;
    },
    createFolderSuccess: (state, action) => {
        state.CHANGETHIS = action.payload
        state.isLoading = false;
    },
    createFolderError: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    },
    downloadFiles: (state, action) => {
        state.isLoading = true;
    },
    downloadFilesProgress: (state, action) => {
        state.CHANGETHIS = action.payload
        state.isLoading = false;
    },
    downloadFilesSuccess: (state, action) => {
        state.CHANGETHIS = action.payload
        state.isLoading = false;
    },
    downloadFilesError: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    },
    uploadFile: (state, action) => {
        state.isLoading = true;
    },
    uploadFileProgress: (state, action) => {
        state.CHANGETHIS = action.payload
        state.isLoading = false;
    },
    uploadFileSuccess: (state, action) => {
        state.CHANGETHIS = action.payload
        state.isLoading = false;
    },
    uploadFileError: (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
    },
  },
});

// Extract the action creators object and the reducer
const {reducer} = rfpSlice;
// Extract and export each action creator by name
export const {actions} = rfpSlice;

export default reducer;