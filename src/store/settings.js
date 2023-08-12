/* Redux toolkit middleware handles updates immutably, but eslint doesn't know that */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { LocalStorageClient } from 'react-chomp';
import { LOCALSTORAGE_KEYS } from '../util/constants';

export const INITIAL_STATE = {
  version: 1,
  mode: 'dark',
  theme: 'main',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    update: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    load: (state, action) => {
      const fallbackState = action.payload.forceOverwrite ? INITIAL_STATE : state;
      return {
        ...fallbackState,
        ...action.payload.newState,
      };
    },
    reset: () => INITIAL_STATE,
  },
});

export const { update, load, reset } = settingsSlice.actions;

export const loadState = () => LocalStorageClient.get(LOCALSTORAGE_KEYS.COMMON, INITIAL_STATE);

export default settingsSlice.reducer;
