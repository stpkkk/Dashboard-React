import React, { useContext, useState } from 'react';
import { ChartList, Modal } from '../components';
import { AppContext } from '../context';

export const SettingsPage: React.FC = () => {
  const { isModal, setModal } = useContext(AppContext);
  const [isModalEdit, setModalEdit] = useState(false);
  return (
    <div className="settings">
      <h2 className="text-center mb-4">Settings</h2>
      <h3 className="m-2">Chart list:</h3>
      <div>
        <ChartList />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setModal(true);
          }}
        >
          Add chart
        </button>
      </div>
      {isModal && (
        <Modal
          chart={{
            id: '',
            name: '',
            type: '',
            data: [],
            color: '',
          }}
          setModalEdit={setModalEdit}
          isModalEdit={isModalEdit}
        />
      )}
    </div>
  );
};
