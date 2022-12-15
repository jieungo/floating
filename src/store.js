import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import distanceSlice from './slices/distanceSlice';
const rootReducer = combineReducers({
  distance: distanceSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
