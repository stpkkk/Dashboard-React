import React, { useState } from 'react';
import { ChartList, ModalAddChart } from '../components';

export const SettingsPage: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

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
            setShowAddModal(true);
          }}
        >
          Add chart
        </button>
      </div>
      {showAddModal && (
        <ModalAddChart
          showAddModal={showAddModal}
          setShowAddModal={setShowAddModal}
        />
      )}
    </div>
  );
};
