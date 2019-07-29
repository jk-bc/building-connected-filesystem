import {rfpApi} from 'api/rfpApi';
import {fetchRFP, fetchRFPSuccess, fetchRFPError} from '../reducers/rfpReducer';

export const fetchRFP = () =>
  async (dispatch) => {
    dispatch(fetchRFP());
    try {
      const data = await rfpApi.getRFPFiles(id);
      return dispatch(fetchRFPSuccess(data));
    } catch (e) {
      return dispatch(fetchRFPError(e.message));
    }
  };