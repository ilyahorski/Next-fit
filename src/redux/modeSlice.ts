import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ThemeModeState {
  theme: boolean;
}

const initialColorState: ThemeModeState = {
  theme: true,
};

export const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState: initialColorState,
  reducers: {
    setMode: (state, action: PayloadAction<boolean>) => {
      state.theme = action.payload;
    },
  },
});

export const { setMode } = themeModeSlice.actions;

export default themeModeSlice.reducer;
