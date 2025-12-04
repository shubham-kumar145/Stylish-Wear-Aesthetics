
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../validations/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

