import React from 'react';

export interface IChart {
  id: string;
  name: string;
  type: string;
  data: number[][];
  color: string;
}

export interface ISidebar {
  title: string;
  path: string;
  icon: React.ReactElement;
}

export interface ISelectModal {
  id: number;
  value: string;
  label: string;
}

export interface ModalProps {
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
  };
}

export interface Option {
  id: number;
  value: string;
  label: string;
  date?: string;
}
