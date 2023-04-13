import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteChart } from '../../redux';
import { IChartObj } from '../../models';
import { Modal } from '../modals';

export const ChartItem: React.FC<IChartObj> = ({ chart }) => {
  const dispatch = useDispatch();
  const [isModalEdit, setModalEdit] = useState<boolean>(false);

  return (
    <li
      className="d-flex align-items-center border border-light rounded p-2 justify-content-between mb-2"
      style={{
        color: chart.color,
      }}
    >
      <div className="d-flex flex-fill align-items-center gap-4">
        <p className="mw-100px d-block fw-bold mb-0">
          {chart.name ? `name: ${chart.name}` : 'name: no name'}
        </p>
        <p className=" d-block fw-bold mb-0">
          {chart.type ? `type: ${chart.type}` : 'type: default'}
        </p>
        {/* <p className=" d-block fw-bold mb-0">
          {chart.data ? `data: ${chart.data}` : 'data: default'}
        </p> */}
      </div>

      <Button
        className="btn btn-light me-2 btn-block"
        onClick={() => {
          setModalEdit(true);
        }}
      >
        Edit
      </Button>

      <Button
        className="btn btn-danger"
        onClick={() => {
          dispatch(
            deleteChart({
              id: chart.id,
              name: '',
              type: '',
              data: [],
              color: '',
            })
          );
        }}
      >
        Delete
      </Button>

      {isModalEdit && (
        <Modal
          chart={chart}
          isModalEdit={isModalEdit}
          setModalEdit={setModalEdit}
        />
      )}
    </li>
  );
};
