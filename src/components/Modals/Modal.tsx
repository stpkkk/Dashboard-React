import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { addChart, editChart, useAppDispatch } from '../../redux';
import { AppContext } from '../../context';
import { chartsData, selectModalData } from '../../data';
import './Modal.css';
import { Select } from './Select';
import { IOption, IModal } from '../../models';
import { ColorPicker } from './ColorPicker';
import { InputText } from './InputText';

export const Modal: React.FC<IModal> = ({
  chart,
  setModalEdit,
  isModalEdit,
}) => {
  const dispatch = useAppDispatch();
  const { isModal, setModal } = useContext(AppContext);

  const [chartName, setChartName] = useState<string>(chart.name);
  const [chartType, setChartType] = useState<string>(chart.type);
  const [chartColor, setChartColor] = useState<string>(chart.color);
  const [chartDataName, setChartDataName] = useState<string>(
    Object.keys(chartsData)[0]
  );

  const handleChangeAdd = () => {
    dispatch(
      addChart({
        id: Math.random().toString().substr(2, 2),
        name: chartName,
        color: chartColor,
        type: chartType,
        data: chartsData[chartDataName],
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
      })
    );
    setModalEdit(false);
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

  const selectOptionsType: IOption[] = selectModalData.typeOptions.map(
    (option) => ({
      id: option.id,
      value: option.value,
      label: option.label,
    })
  );

  const selectOptionsName: IOption[] = Object.keys(chartsData).map((date) => ({
    id: Number(date),
    value: date,
    label: date,
  }));

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
          className="btn btn-danger btn-close mb-4 p-2"
          onClick={() => {
            setModal(false);
            setModalEdit(false);
          }}
        />
        <h3>{isModalEdit ? 'Edit' : 'Add'}</h3>

        <form>
          <fieldset>
            <InputText setChartName={setChartName} />
            <Select
              selectName="chart-type"
              selectLabelName="Chart type:"
              onChange={handleChangeChartType}
              selectValue={chartType}
              options={selectOptionsType}
            />
            <Select
              selectName="chart-data"
              selectLabelName="Chart data:"
              onChange={handleChangeChartData}
              selectValue={chartsData[0] ? chartsData[0].toString() : ''}
              options={selectOptionsName}
            />
            <ColorPicker
              chartColor={chartColor}
              setChartColor={setChartColor}
            />
            {isModalEdit ? (
              <Button onClick={handleChangeEdit}>Edit</Button>
            ) : (
              <Button onClick={handleChangeAdd}>Submit</Button>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};
