import { configureStore } from '@reduxjs/toolkit';
import currentPageReducer from './homePageSlice';
import themeModeReducer from './modeSlice';

const store = configureStore({
  reducer: {
    currentPage: currentPageReducer,
    mode: themeModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
