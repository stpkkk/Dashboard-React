import React, { useState, useContext } from 'react';
import { addChart, editChart, useAppDispatch } from '../../redux';
import { AppContext } from '../../context';
import { chartsData, selectModalData } from '../../data';
import './Modal.css';
import { Select } from './Select';
import { Option } from '../../models';
import { ColorPicker } from './ColorPicker';
import { InputText } from './InputText';

interface ModalProps {
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
  };
  setModalEdit: (name: boolean) => void;
  isModalEdit: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  chart,
  setModalEdit,
  isModalEdit,
}) => {
  const dispatch = useAppDispatch();
  const { isModal, setModal, handleKeyDown, handleClickCloseModal } =
    useContext(AppContext);

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

  const selectOptionsType: Option[] = selectModalData.typeOptions.map(
    (option: { id: number; value: string; label: string }) => ({
      id: option.id,
      value: option.value,
      label: option.label,
    })
  );

  const selectOptionsName: Option[] = Object.keys(chartsData).map((date) => ({
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
        <button
          className="btn btn-close float-end mb-4"
          type="button"
          aria-label="Close"
          onClick={() => {
            setModal(false);
            setModalEdit(false);
          }}
        />
        <h3>Add</h3>

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
              selectValue={chartsData[0]}
              options={selectOptionsName}
            />
            <ColorPicker
              chartColor={chartColor}
              setChartColor={setChartColor}
            />
            {isModalEdit ? (
              <button
                type="button"
                className="btn btn-primary "
                onClick={handleChangeEdit}
              >
                Edit
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary "
                onClick={handleChangeAdd}
              >
                Submit
              </button>
            )}
          </fieldset>
        </form>
      </div>
    </div>
  );
};
