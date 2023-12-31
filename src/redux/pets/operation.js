import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://project-be7v6c5s.onrender.com';

export const fetchPets = createAsyncThunk(
  'pets/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/pets/');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPetDel = createAsyncThunk(
  'pets/deletePet',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`api/pets/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
