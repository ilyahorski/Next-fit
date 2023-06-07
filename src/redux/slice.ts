import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentPageState {
  value: string;
  isTop: boolean;
}

const initialState: CurrentPageState = {
  value: 'home',
  isTop: true,
};

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setIsTopOfPage: (state, action: PayloadAction<boolean>) => {
      state.isTop = action.payload;
    },
  },
});

export const { setCurrentPage, setIsTopOfPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
