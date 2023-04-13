import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IChart } from '../models';

const initialState: IChart[] = [];

export const chartSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<IChart>) => {
      state.push(action.payload);
    },
    deleteChart: (state, action: PayloadAction<IChart>) =>
      state.filter((chart: IChart) => chart.id !== action.payload.id),

    editChart: (state, action: PayloadAction<IChart>) => {
      const { id, name, type, data, color } = action.payload;
      return state.map((chart: IChart) => {
        if (chart.id === id) {
          return {
            ...chart,
            name,
            type,
            data,
            color,
          };
        }
        return chart;
      });
    },
  },
});

export const selectCharts = (state: { charts: any }) => state.charts;

export const { addChart, deleteChart, editChart } = chartSlice.actions;
export default chartSlice.reducer;
