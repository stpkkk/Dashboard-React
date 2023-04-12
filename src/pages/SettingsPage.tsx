import React, { useContext } from 'react';
import { ChartList, ModalAddChart } from '../components';
import { AppContext } from '../context';

export const SettingsPage: React.FC = () => {
  const { isModal, setModal } = useContext(AppContext);

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
      {isModal && <ModalAddChart />}
    </div>
  );
};
