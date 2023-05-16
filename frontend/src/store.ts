import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = (dispatch: AppDispatch, getState: () => RootState) => void;

export default store;