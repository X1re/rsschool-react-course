import { IdataArr } from './../pages/Survey';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FormCards = {
  formCards: [];
};

const initialState: FormCards = { formCards: [] };

const formCardSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCard(state, action: PayloadAction<IdataArr>) {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCard } = formCardSlice.actions;
export default formCardSlice.reducer;
