import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteChart } from '../../redux';
import { IChartObj } from '../../models';
import { Modal } from '../modals';

export const ChartItem: React.FC<IChartObj> = ({ chart }) => {
  const dispatch = useDispatch();
  const [isModalEdit, setModalEdit] = useState(false);
  const listItems = [
    {
      title: 'name',
      value: chart.name ? `name: ${chart.name}` : 'name: default',
    },
    {
      title: 'type',
      value: chart.type ? `type: ${chart.type}` : 'type: default',
    },
  ];

  const renderedListItems = listItems.map((item) => (
    <li className="d-block fw-bold mb-0 " key={item.title}>
      {item.value}
    </li>
  ));

  return (
    <li
      className="d-flex align-items-center border border-light rounded p-2 justify-content-between mb-2"
      style={{
        color: chart.color,
      }}
    >
      <ul className="d-flex align-items-center gap-4">{renderedListItems}</ul>

      <div className="ml-auto">
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
      </div>

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
