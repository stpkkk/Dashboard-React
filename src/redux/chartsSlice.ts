import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChart } from '../models';

interface ChartsState extends Array<IChart> {}

const initialState: ChartsState = [];

export const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<IChart>) => {
      state.push(action.payload);
    },
    deleteChart: (state, action: PayloadAction<IChart>) => {
      const chartIdToDelete = action.payload.id;
      return state.filter((chart: IChart) => chart.id !== chartIdToDelete);
    },
    editChart: (state, action: PayloadAction<IChart>) =>
      state.map((chart: IChart) => {
        if (chart.id === action.payload.id) {
          return {
            ...chart,
            ...action.payload,
          };
        }
        return chart;
      }),
  },
});

export const selectCharts = (state: { charts: ChartsState }) => state.charts;

export const { addChart, deleteChart, editChart } = chartSlice.actions;
export default chartSlice.reducer;
