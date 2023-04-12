import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { deleteChart } from '../../redux';
import { ModalEditChart } from '../modals';
import { AppContext } from '../../context';
import { ModalProps } from '../../models';

export const Chart: React.FC<ModalProps> = ({ chart }: ModalProps) => {
  const dispatch = useDispatch();
  const { isOpenPopUp, setOpenPopUp } = useContext(AppContext);

  return (
    <li
      className="list-group-item mb-2 d-flex justify-content-start align-items-center border border-light rounded p-2"
      style={{
        color: chart.color,
      }}
    >
      <span className="me-2 ms-0 flex-fill bd-highlight overflow-hidden fw-bold">
        {chart.name}
      </span>

      <button
        type="button"
        className="btn btn-light me-2 btn-block"
        onClick={() => {
          setOpenPopUp(true);
        }}
      >
        Edit
      </button>

      <button
        type="button"
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
      </button>

      {isOpenPopUp && <ModalEditChart chart={chart} />}
    </li>
  );
};
