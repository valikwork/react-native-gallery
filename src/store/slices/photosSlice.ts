import { createSlice } from '@reduxjs/toolkit';
import { fetchPhotos } from '../fetchPhotos';

export type APIResponse = {[index: string]: any}[]

export interface AppPhotoState {
  photos: APIResponse
  isLoading: boolean
  isError: boolean
}

const initialState: AppPhotoState = {
  photos: [],
  isLoading: false,
  isError: false,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state, action) => {
     state.isLoading = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
     state.isLoading = false;
     state.photos = action.payload as APIResponse;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
     state.isError = true;
    });
   },
});

// export const { setUsername } = photosSlice.actions;

export default photosSlice.reducer;
