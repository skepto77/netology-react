import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemEdit: {},
  status: 'idle', // idle, loading
  filter: '',
  itemsInLoading: [],
  redirectToList: false,
  error: null,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getItems(state, action) {
      state.items = action.payload;
      state.redirectToList = false;
    },

    editSetItem(state, action) {
      state.itemEdit = action.payload;
    },

    setRedirect(state, action) {
      state.redirectToList = true;
    },

    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    addToItemsInLoading(state, action) {
      state.itemsInLoading.push(action.payload);
    },

    removeFromItemsInLoading(state, action) {
      state.itemsInLoading = state.itemsInLoading.filter((item) => item !== action.payload);
    },

    changeStatus(state, action) {
      state.status = action.payload;
    },

    filterItems(state, action) {
      state.filter = action.payload;
    },

    setError(state, action) {
      state.status = 'idle';
      state.error = action.payload;
    },
  },
});

export const {
  getItems,
  editSetItem,
  setRedirect,
  removeItem,
  changeStatus,
  filterItems,
  setError,
  addToItemsInLoading,
  removeFromItemsInLoading,
} = listSlice.actions;

// thunks

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch(setError(null));
    dispatch(changeStatus('loading'));
    const response = await fetch('http://localhost:7070/api/services');

    if (!response.ok) {
      throw new Error('Произошла ошибка при загрузке списка');
    }

    const data = await response.json();
    dispatch(getItems(data));
  } catch (error) {
    dispatch(setError('Ошибка при загрузке списка'));
  } finally {
    dispatch(changeStatus('idle'));
  }
};

export const fetchItem = (id) => async (dispatch) => {
  dispatch(setError(null));
  dispatch(changeStatus('loading'));
  try {
    const response = await fetch(`http://localhost:7070/api/services/${id}`);

    if (!response.ok) {
      throw new Error('Ошибка при загрузке пункта из списка. Обновите страницу');
    }

    const data = await response.json();
    dispatch(editSetItem(data));
  } catch (error) {
    dispatch(setError('Ошибка при загрузке пункта из списка. Обновите страницу'));
  } finally {
    dispatch(changeStatus('idle'));
  }
};

export const fetchRemoveItem = (id) => async (dispatch) => {
  try {
    dispatch(setError(null));
    dispatch(addToItemsInLoading(id));
    await fetch(`http://localhost:7070/api/services/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    dispatch(setError('Ошибка при удалении данных'));
  } finally {
    dispatch(removeItem(id));
    dispatch(removeFromItemsInLoading(id));
  }
};

export const fetchAddItem =
  ({ name, price, content }) =>
  async (dispatch) => {
    dispatch(changeStatus('loading'));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ id: 0, name, price, content }),
    };

    try {
      const response = await fetch('http://localhost:7070/api/services', requestOptions);

      if (!response.ok) {
        throw new Error('Ошибка при добавлении данных');
      }
      dispatch(fetchItems());
    } catch (error) {
      dispatch(setError('Ошибка при добавлении данных'));
    }
  };

export const fetchSaveItem =
  ({ id, name, price, content }) =>
  async (dispatch) => {
    dispatch(changeStatus('loading'));
    dispatch(setError(''));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ id: Number(id), name, price, content }),
    };

    try {
      const response = await fetch('http://localhost:7070/api/services', requestOptions);

      if (!response.ok) {
        dispatch(setError('Ошибка при сохранении данных'));
      }
      dispatch(setRedirect(true));
    } catch (error) {
      dispatch(setError('Ошибка при сохранении данных'));
    } finally {
      dispatch(changeStatus('idle'));
    }
  };

export default listSlice.reducer;
