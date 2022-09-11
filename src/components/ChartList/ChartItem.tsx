import React, { useState } from "react";
import { deleteChart } from "../../redux/chartsSlice";
import ModalEditChart from "../Modals/ModalEditChart";
import { useDispatch } from "react-redux";


type ChartItemProps = {
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
  };
};

const ChartItem: React.FC<ChartItemProps> = ({ chart }: ChartItemProps) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const dispatch = useDispatch();

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
        onClick={() => setShowEditModal(true)}
      >
        Edit
      </button>

      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(
            deleteChart({
              id: chart.id,
              name: "",
              type: "",
              data: [],
              color: "",
            })
          );
        }}
      >
        Delete
      </button>

      {showEditModal && (
        <ModalEditChart
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          chart={chart}
        />
      )}
    </li>
  );
};

export default ChartItem;
