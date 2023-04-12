import React, { useState, useContext } from 'react';
import { CompactPicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { addChart } from '../../redux';
import { chartsData, selectModalData } from '../../data';
import './Modal.css';
import { AppContext } from '../../context';

export const ModalAddChart: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpenPopUp, setOpenPopUp } = useContext(AppContext);

  const [chartColor, setChartColor] = useState<string>('#a53c82');
  const [chartName, setChartName] = useState<string>('');
  const [chartType, setChartType] = useState<string>('');
  const [chartDataName, setChartDataName] = useState<string>('');

  const handleChangeChartType = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChartType(event.target.value);
  };
  const handleChangeChartDataName = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartDataName(event.target.value);
  };

  const handleChange = () => {
    setOpenPopUp(false);
    dispatch(
      addChart({
        id: Math.random().toString().substr(2, 2),
        name: chartName,
        color: chartColor,
        type: chartType,
        data: chartsData[chartDataName],
      })
    );
  };

  const handleClickOpenModal = () => {
    setOpenPopUp(false);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setOpenPopUp(false);
    }
  };

  return (
    <div
      className={isOpenPopUp ? 'modal active' : 'modal'}
      role="button"
      tabIndex={0}
      onClick={handleClickOpenModal}
      onKeyDown={handleKeyDown}
    >
      <div
        className={isOpenPopUp ? 'modal-content active' : 'modal-content'}
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
            setOpenPopUp(false);
          }}
        />
        <h3 className=".mb-0">Add</h3>

        <form>
          <fieldset className="mb-2 ">
            <div className="mb-3 chart-name ">
              <label
                htmlFor="chart-name"
                className="form-label  mr-auto  w-100"
                aria-label="chart-name"
                tabIndex={-2}
              >
                Chart name:
                <input
                  type="text"
                  id="chart-name"
                  className="form-control "
                  placeholder="Chart name"
                  onChange={(event) => {
                    setChartName(event.target.value);
                  }}
                />
              </label>
            </div>

            <div className="mb-3 chart-type">
              <label
                htmlFor="chart-type"
                className="form-label  mr-auto  w-100"
                aria-label="chart-type"
                tabIndex={-3}
              >
                Chart type:
                <select
                  id="chart-type"
                  className="form-select"
                  onChange={handleChangeChartType}
                  value={chartType}
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
                className="form-label  mr-auto  w-100"
                htmlFor="chart-data"
                aria-label="chart-data"
                tabIndex={-4}
              >
                Chart data:
                <select
                  className="form-select"
                  onChange={(event) => {
                    handleChangeChartDataName(event);
                  }}
                >
                  {Object.keys(chartsData).map((date) => (
                    <option
                      className="modal-select-option "
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
                color={chartColor}
                onChangeComplete={(color) => {
                  setChartColor(color.hex);
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
