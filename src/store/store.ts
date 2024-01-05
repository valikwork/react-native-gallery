import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import photosReducer from './slices/photosSlice';

const store = configureStore({
 reducer: photosReducer,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
