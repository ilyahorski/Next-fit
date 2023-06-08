import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentPageState {
  value: string;
  isTop: boolean;
  lang: string;
}

const initialState: CurrentPageState = {
  value: 'home',
  isTop: true,
  lang: 'EN',
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
    setLanguagePage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setCurrentPage, setIsTopOfPage, setLanguagePage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
