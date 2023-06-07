import { configureStore } from '@reduxjs/toolkit';
import currentPageReducer from './slice';

const store = configureStore({
  reducer: {
    currentPage: currentPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
