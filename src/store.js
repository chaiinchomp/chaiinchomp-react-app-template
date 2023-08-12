import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import { LocalStorageClient } from 'react-chomp';
import settingsReducer, { loadState as loadSettingsState } from './store/settings';
import { LOCALSTORAGE_KEYS } from './util/constants';

const reducer = {
  settings: settingsReducer,
};

const preloadedState = {
  settings: loadSettingsState(),
};

const store = configureStore({
  reducer,
  preloadedState,
  middleware: [thunk],
});

store.subscribe(
  throttle(() => {
    LocalStorageClient.update(LOCALSTORAGE_KEYS.SETTINGS, store.getState().settings);
  }, 200),
);

export default store;
