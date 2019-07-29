import { createFolder, downloadFiles, uploadFile } from "api/rfpApi";
import { actions } from "../reducers/filesReducer";

export const createFolder = () => {
  async dispatch => {
    dispatch(actions.createFolderAction());
    try {
      const data = await filesApi.createFolder(CHANGETHIS);
      return dispatch(actions.createFolderSuccess(data));
    } catch (e) {
      return dispatch(actions.createFolderError(e.message));
    }
  };
};
export const downloadFiles = () => {
  async dispatch => {
    dispatch(actions.downloadFilesAction());
    try {
      // TODO: PROGRESS TRACK
      const data = await filesApi.downloadFiles(CHANGETHIS);
      return dispatch(actions.downloadFilesSuccess(data));
    } catch (e) {
      return dispatch(actions.downloadFilesError(e.message));
    }
  };
};
export const uploadFile = () => {
  async dispatch => {
    dispatch(actions.uploadFileAction());
    try {
      // TODO: PROGRESS TRACK
      const data = await filesApi.uploadFile(CHANGETHIS);
      return dispatch(actions.uploadFileSuccess(data));
    } catch (e) {
      return dispatch(actions.uploadFileError(e.message));
    }
  };
};
