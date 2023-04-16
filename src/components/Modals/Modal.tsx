import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { addChart, editChart, useAppDispatch } from '../../redux';
import { AppContext } from '../../context';
import { selectModalData } from '../../data';
import { ColorPicker } from './ColorPicker';
import { Select } from './Select';
import { InputText } from './InputText';
import { IOption, IModal } from '../../models';
import './Modal.css';

export const Modal: React.FC<IModal> = ({
  chart,
  setModalEdit,
  isModalEdit,
}) => {
  const dispatch = useAppDispatch();
  const { isModal, setModal, chartsData } = useContext(AppContext);

  const [chartName, setChartName] = useState(chart.name);
  const [chartType, setChartType] = useState(chart.type);
  const [chartColor, setChartColor] = useState(chart.color);
  const [chartDataName, setChartDataName] = useState(chart.dataName);

  const handleChangeAdd = () => {
    dispatch(
      addChart({
        id: Math.random().toString().substr(3, 3),
        name: chartName,
        color: chartColor,
        type: chartType,
        data: chartsData[chartDataName],
        dataName: chartDataName,
      })
    );
    setModal(false);
  };

  const handleChangeEdit = () => {
    dispatch(
      editChart({
        id: chart.id,
        name: chartName,
        type: chartType,
        data: chartsData[chartDataName],
        color: chartColor,
        dataName: chartDataName,
      })
    );
    setModalEdit(false);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isModalEdit) {
      handleChangeEdit();
    } else {
      handleChangeAdd();
    }
  };

  const handleClickCloseModal = () => {
    setModal(false);
    setModalEdit(false);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setModal(false);
      setModalEdit(false);
    }
  };

  const handleChangeChartType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartType(event.target.value);
  };

  const handleChangeChartData = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartDataName(event.target.value);
  };

  const optionsChartType: IOption[] = selectModalData.typeOptions.map(
    (option) => ({
      id: option.id,
      value: option.value,
      label: option.label,
    })
  );

  const optionsChartDataName: IOption[] = selectModalData.dataNameOptions.map(
    (option) => ({
      id: option.id,
      value: option.value,
      label: option.label,
    })
  );

  return (
    <div
      className={isModal || isModalEdit ? 'modal active' : 'modal'}
      role="button"
      tabIndex={0}
      onClick={handleClickCloseModal}
      onKeyDown={handleKeyDown}
    >
      <div
        className={
          isModal || isModalEdit ? 'modal-content active' : 'modal-content'
        }
        role="button"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Button
          className="btn btn-close btn-danger mb-2 p-2 ms-auto"
          onClick={() => {
            setModal(false);
            setModalEdit(false);
          }}
        />
        <h3>{isModalEdit ? 'Edit' : 'Add'}</h3>

        <form onSubmit={handleFormSubmit}>
          <InputText setChartName={setChartName} chartName={chartName} />
          <Select
            selectName="chart-type"
            selectLabelName="Chart type:"
            onChange={handleChangeChartType}
            selectValue={chartType}
            options={optionsChartType}
          />
          <Select
            selectName="chart-data"
            selectLabelName="Chart values:"
            onChange={handleChangeChartData}
            selectValue={chartDataName}
            options={optionsChartDataName}
          />
          <ColorPicker chartColor={chartColor} setChartColor={setChartColor} />
          <Button type="submit">{isModalEdit ? 'Edit' : 'Submit'}</Button>
        </form>
      </div>
    </div>
  );
};
