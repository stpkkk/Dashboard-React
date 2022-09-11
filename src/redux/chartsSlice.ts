import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChart } from "../models";

const initialState: IChart[] = [];

export const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<IChart>) => {
      state.push(action.payload);
    },
    deleteChart: (state, action: PayloadAction<IChart>) => {
      return state.filter((chart: IChart) => chart.id !== action.payload.id);
    },

    editChart: (state, action: PayloadAction<IChart>) => {
      state.map((chart: IChart) => {
        if (chart.id === action.payload.id) {
          chart.name = action.payload.name;
          chart.type = action.payload.type;
          chart.data = action.payload.data;
          chart.color = action.payload.color;
        }
        return state;
      });
    },
  },
});

export const selectCharts = (state: { charts: any }) => state.charts;

export const { addChart, deleteChart, editChart } = chartSlice.actions;
export default chartSlice.reducer;
