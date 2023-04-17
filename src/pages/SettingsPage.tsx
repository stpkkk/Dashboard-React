import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Button,
  ChartList,
  Modal,
  PageTitle,
  PageWrapper,
} from '../components';
import { AppContext } from '../context';
import { theme } from '../styles';

const {
  button: { blueBtn, greenBtn },
  hover: { greenHover, blueHover },
} = theme.colors;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const SettingsPage: React.FC = () => {
  const { isModal, setModal } = useContext(AppContext);
  const [isModalEdit, setModalEdit] = useState(false);

  return (
    <PageWrapper>
      <PageTitle>Settings</PageTitle>
      <ChartList />
      <ButtonsWrapper>
        <Button
          bg={greenBtn}
          mw={100}
          p="10px 0"
          hoverBg={greenHover}
          color="#fff"
          onClick={() => {
            setModal(true);
          }}
        >
          Add Chart
        </Button>
        <Button bg={blueBtn} mw={100} p="10px 0" hoverBg={blueHover}>
          <Link to="/">View Mode</Link>
        </Button>
      </ButtonsWrapper>
      {isModal && (
        <Modal
          chart={{
            id: '',
            name: '',
            type: '',
            data: [],
            color: '',
            dataName: '',
          }}
          setModalEdit={setModalEdit}
          isModalEdit={isModalEdit}
        />
      )}
    </PageWrapper>
  );
};
