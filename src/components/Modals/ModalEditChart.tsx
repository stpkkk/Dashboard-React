import React, { useState } from 'react';
import { CompactPicker } from 'react-color';
import { editChart, useAppDispatch } from '../../redux';
import { selectModalData, chartsData } from '../../data';
import './Modal.css';

interface ModalEditProps {
  showEditModal: boolean;
  setShowEditModal: (value: boolean) => void;
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
  };
}

export const ModalEditChart: React.FC<ModalEditProps> = ({
  chart,
  showEditModal,
  setShowEditModal,
}) => {
  const dispatch = useAppDispatch();

  const [newChartName, setNewChartName] = useState<string>('');
  const [newChartType, setNewChartType] = useState<string>('');
  const [newChartDataName, setNewChartDataName] = useState<string>('');
  const [newChartColor, setNewChartColor] = useState<string>('');

  const handleChange = () => {
    dispatch(
      editChart({
        id: chart.id,
        name: newChartName,
        type: newChartType,
        data: chartsData[newChartDataName],
        color: newChartColor,
      })
    );
    setShowEditModal(false);
  };

  const handleChangeNewChartType = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewChartType(event.target.value);
  };

  const handleChangeNewChartDataName = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewChartDataName(event.target.value);
  };

  const handleClickOpenModal = () => {
    setShowEditModal(false);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setShowEditModal(false);
    }
  };

  return (
    <div
      className={showEditModal ? 'modal active' : 'modal'}
      role="button"
      tabIndex={0}
      onClick={handleClickOpenModal}
      onKeyDown={handleKeyDown}
    >
      <div
        className={showEditModal ? 'modal-content active' : 'modal-content'}
        role="button"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          type="button"
          className="btn btn-close float-end mb-4"
          aria-label="Close"
          onClick={() => {
            setShowEditModal(false);
          }}
        />
        <h3 className=".mb-0">Edit</h3>

        <form>
          <fieldset className="mb-2">
            <div className="mb-3 chart-name  mr-auto  w-100">
              <label
                htmlFor="chart-name"
                className="form-label mr-auto  w-100"
                aria-label="chart-name"
                tabIndex={-2}
              >
                Chart name:
                <input
                  type="text"
                  placeholder={chart.name}
                  className="form-control"
                  onChange={(event) => {
                    setNewChartName(event.target.value);
                  }}
                  id="chart-name"
                  name={chart.name}
                />
              </label>
            </div>

            <div className="mb-3 chart-type">
              <label
                htmlFor="chart-type"
                className="form-label mr-auto w-100"
                aria-label="chart-type"
                tabIndex={-3}
              >
                Chart type:
                <select
                  id="chart-type"
                  className="form-select"
                  onChange={handleChangeNewChartType}
                  value={chart.type}
                >
                  {selectModalData.typeOptions.map(
                    (option: { id: number; value: string; label: string }) => (
                      <option key={option.id} value={option.value}>
                        {option.label}
                      </option>
                    )
                  )}
                </select>
              </label>
            </div>

            <div className="mb-3 chart-data">
              <label
                className="form-label  mr-auto w-100"
                htmlFor="chart-data"
                aria-label="chart-data"
                tabIndex={-4}
              >
                Chart data:
                <select
                  className="form-select"
                  id="chart-data"
                  onChange={(event) => {
                    handleChangeNewChartDataName(event);
                  }}
                >
                  {Object.keys(chartsData).map((date) => (
                    <option
                      className="modal-select-option"
                      key={date}
                      value={date}
                      label={date}
                    />
                  ))}
                </select>
              </label>
            </div>

            <div className="mb-3 chart-color">
              <span
                className="form-label"
                aria-label="chart-color"
                tabIndex={-4}
              >
                Chart color:
              </span>
              <CompactPicker
                className="w-100"
                color={newChartColor}
                onChangeComplete={(color) => {
                  setNewChartColor(color.hex);
                }}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary "
              onClick={handleChange}
            >
              Confirm
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
