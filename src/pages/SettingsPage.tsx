import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { ChartList, Modal } from '../components';
import { AppContext } from '../context';

export const SettingsPage: React.FC = () => {
  const { isModal, setModal } = useContext(AppContext);
  const [isModalEdit, setModalEdit] = useState(false);
  return (
    <div className="container">
      <h2 className="text-center mb-4">Settings</h2>
      <div>
        <ChartList />
        <Button
          onClick={() => {
            setModal(true);
          }}
        >
          Add chart
        </Button>
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
