import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './chartsSlice';

export const store = configureStore({
  reducer: {
    charts: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
