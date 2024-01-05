import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

type PageArgument = number | undefined;

export const fetchPhotos = createAsyncThunk('fetchPhotos', async (page: PageArgument) => {
  const res = await axios(`${Config.API_ENDPOINT}/photos?page=${page ? page : 1}`, {
    headers: {
      Authorization: `Client-ID ${Config.API_KEY}`,
    },
  });
  return res.data;
});
