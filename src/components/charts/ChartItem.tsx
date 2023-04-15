import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteChart } from '../../redux';
import { Modal } from '../modals';
import { IChartObj } from '../../models';

export const ChartItem: React.FC<IChartObj> = ({ chart }) => {
  const dispatch = useDispatch();
  const [isModalEdit, setModalEdit] = useState(false);

  const handleEdit = () => {
    setModalEdit(true);
  };

  const handleDelete = () => {
    dispatch(
      deleteChart({
        id: chart.id,
        name: '',
        type: '',
        data: [],
        color: '',
      })
    );
  };

  return (
    <li
      className=""
      style={{
        color: chart.color,
      }}
    >
      <ul className="row border border-light rounded p-2 g-2 g-md-0  d-flex align-items-center ">
        <li className="col-lg-4 col-md-3 col-sm-3 fw-bold text-align text-wrap w-100px">
          {chart.name ? `name: ${chart.name}` : 'name: no name'}
        </li>
        <li className="col-lg-4 col-md-3 col-sm-3 fw-bold text-wrap">
          {chart.type ? `type: ${chart.type}` : 'type: default'}
        </li>
        <li className="col-lg-1 col-md-2 col-sm-2 t me-2 btn-block ms-auto p-0">
          <Button className="btn btn-light w-100" onClick={handleEdit}>
            Edit
          </Button>
        </li>
        <li className="col-lg-1 col-md-2 col-sm-2 p-0">
          <Button className="btn btn-danger w-100" onClick={handleDelete}>
            Delete
          </Button>
        </li>
      </ul>
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
