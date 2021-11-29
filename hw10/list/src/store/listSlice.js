import { createSlice } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';

const initialState = {
  items: [{ id: uniqueId('item_'), name: 'test', price: 0 }],
  itemEdit: {},
  status: 'addition', // addition or editing
  filter: '',
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push({
        id: uniqueId('item_'),
        name: action.payload.name,
        price: action.payload.price,
      });
    },

    editSetItem(state, action) {
      state.itemEdit = state.items.filter(
        (item) => item.id === action.payload.id
      );
    },

    editItem(state, action) {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (idx === -1) {
        state.items.push({
          id: uniqueId('item_'),
          name: action.payload.name,
          price: action.payload.price,
        });
      } else {
        state.items[idx] = action.payload;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    changeStatus(state, action) {
      state.status = action.payload;
    },

    filterItems(state, action) {
      state.filter = action.payload;
    },
  },
});

export const {
  addItem,
  editItem,
  editSetItem,
  removeItem,
  changeStatus,
  filterItems,
} = listSlice.actions;

export default listSlice.reducer;
