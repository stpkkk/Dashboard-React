import React, { useState } from 'react'
import './Modal.css'
import { CompactPicker } from 'react-color'
import { editChart } from '../../redux/chartsSlice'
import { useAppDispatch } from '../../redux/hooks'
import { selectModalData } from '../../data/selectModalData'
import { chartsDataValue } from '../../data/chartsData'

interface ModalEditProps {
  showEditModal: boolean
  setShowEditModal: (value: boolean) => void
  chart: {
    id: string
    name: string
    type: string
    data: number[][]
    color: string
  }
}

const ModalEditChart: React.FC<ModalEditProps> = ({
  chart,
  showEditModal,
  setShowEditModal
}) => {
  const dispatch = useAppDispatch()

  const [newChartName, setNewChartName] = useState<string>('')
  const [newChartType, setNewChartType] = useState<string>('')
  const [newChartDataName, setNewChartDataName] = useState<string>('')
  const [newChartColor, setNewChartColor] = useState<string>('')

  const handleChange = () => {
    dispatch(
      editChart({
        id: chart.id,
        name: newChartName,
        type: newChartType,
        data: chartsDataValue[newChartDataName],
        color: newChartColor
      })
    )
    setShowEditModal(false)
  }

  const handleChangeNewChartType = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setNewChartType(event.target.value)
  }
  const handleChangeNewChartDataName = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNewChartDataName(event.target.value)
  }

  return (
    <>
      <div
        className={showEditModal ? 'modal active' : 'modal'}
        onClick={() => { setShowEditModal(false) }}
      >
        <div
          className={showEditModal ? 'modal-content active' : 'modal-content'}
          onClick={e => { e.stopPropagation() }}
        >
          <button
            type="button"
            className="btn btn-close float-end mb-4"
            aria-label="Close"
            onClick={() => { setShowEditModal(false) }}
          />
          <h3 className=".mb-0">Edit</h3>

          <form>
            <fieldset className="mb-2">
              <div className="mb-3 chart-name">
                <label htmlFor="" className="form-label">
                  Chart name:
                </label>
                <input
                  type="text"
                  placeholder={chart.name}
                  className="form-control"
                  onChange={event => {
                    setNewChartName(event.target.value)
                  }}
                />
              </div>

              <div className="mb-3 chart-type">
                <label htmlFor="" className="form-label">
                  Chart type:
                </label>
                <select
                  className="form-select"
                  onChange={handleChangeNewChartType}
                  value={chart.type}
                >
                  {selectModalData.typeOptions.map(
                    (
                      option: {
                        value: string
                        label: string
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
                  onChange={event => { handleChangeNewChartDataName(event) }}
                >
                  {Object.keys(chartsDataValue).map((chart, index) => {
                    return (
                      <option
                        className="modal-select-option"
                        key={`id${index}`}
                        value={chart}
                        label={chart}
                      ></option>
                    )
                  })}
                </select>
              </div>

              <div className="mb-3 chart-color">
                <label htmlFor="" className="form-label">
                  Chart color:
                </label>
                <CompactPicker
                  className="w-100"
                  color={newChartColor}
                  onChangeComplete={color => {
                    setNewChartColor(color.hex)
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
  )
}

export default ModalEditChart
