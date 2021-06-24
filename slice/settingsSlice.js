import { createSlice } from '@reduxjs/toolkit';
import Database from '../api/Database';

export const slice = createSlice({
  name: 'settings',
  initialState: {
    startTime: "08:00",
    cutoffTime: "23:59",
    cutoffDay: "Same Day",
    // in mins
    offset: 30,
    limit:  8 * 60,
  },
  reducers: {
    editSettings: (state, action) => {
      const input = action.payload
      const newState = {
        ...state,
        [input.settingName]: input.newSetting,
      }
      console.log(newState);
      Database( {action: "upload", slice: "settings", data: newState} )
      return newState;
    },
    downloadSettings: (state, action) => {
      const input = action.payload
      const newState = {
        ...input
      }
      return newState;
    },
  }
})

export const { editSettings, downloadSettings } = slice.actions;

export const selectSettings = state => state.settings;

export default slice.reducer;