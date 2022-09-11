import React, { useState } from "react";
import "./Modal.scss";
import { CompactPicker } from "react-color";
import { addChart } from "../../redux/chartsSlice";
import { useDispatch } from "react-redux";
import { chartsDataValue } from "../../data/chartsData";
import { selectModalData } from "../../data/selectModalData";

interface ModalProps {
  showAddModal: boolean;
  setShowAddModal: (name: boolean) => void;
}

const ModalAddChart: React.FC<ModalProps> = ({
  showAddModal,
  setShowAddModal,
}) => {
  const dispatch = useDispatch();

  const [chartColor, setChartColor] = useState<string>("#a53c82");
  const [chartName, setChartName] = useState<string>("");
  const [chartType, setChartType] = useState<string>("");
  const [chartDataName, setChartDataName] = useState<string>("");

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
    setShowAddModal(false);
    dispatch(
      addChart({
        id: Math.random().toString().substr(2, 2),
        name: chartName,
        color: chartColor,
        type: chartType,
        data: chartsDataValue[chartDataName],
      })
    );
  };

  return (
    <>
      <div
        className={showAddModal ? "modal active" : "modal"}
        onClick={() => setShowAddModal(false)}
      >
        <div
          className={showAddModal ? "modal-content active" : "modal-content"}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="btn btn-close float-end mb-4"
            aria-label="Close"
            onClick={() => setShowAddModal(false)}
          />
          <h3 className=".mb-0">Add</h3>

          <form>
            <fieldset className="mb-2">
              <div className="mb-3 chart-name">
                <label htmlFor="" className="form-label">
                  Chart name:
                </label>
                <input
                  type="text"
                  id=""
                  className="form-control"
                  placeholder="Chart name"
                  onChange={(event) => {
                    setChartName(event.target.value);
                  }}
                />
              </div>

              <div className="mb-3 chart-type">
                <label htmlFor="" className="form-label">
                  Chart type:
                </label>
                <select
                  className="form-select"
                  onChange={handleChangeChartType}
                  value={chartType}
                >
                  {selectModalData.typeOptions.map(
                    (
                      option: {
                        value: string;
                        label: string;
                      },
                      index: number
                    ) => (
                      <option key={`id${index}`} value={option.value}>
                        {option.label}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="mb-3 chart-data">
                <label htmlFor="" className="form-label">
                  Chart data:
                </label>
                <select
                  className="form-select"
                  onChange={(event) => handleChangeChartDataName(event)}
                >
                  {Object.keys(chartsDataValue).map((chart, index) => {
                    return (
                      <option
                        className="modal-select-option"
                        key={`id${index}`}
                        value={chart}
                        label={chart}
                      ></option>
                    );
                  })}
                </select>
              </div>

              <div className="mb-3 chart-color">
                <label htmlFor="" className="form-label">
                  Chart color:
                </label>
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
    </>
  );
};

export default ModalAddChart;
