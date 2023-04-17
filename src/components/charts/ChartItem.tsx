import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteChart } from '../../redux';
import { Modal } from '../modal';
import { IChartObj } from '../../models';
import { theme } from '../../styles';
import { Button } from '../common';

const {
  border: { lightGray },
  button: { lightBtn, redBtn },
  hover: { redHover, lightHover },
} = theme.colors;

const ChartItemWrapper = styled.li`
  color: ${(props) => props.color};
`;

const ChartItemRow = styled.ul`
  display: flex;
  align-items: center;
  border: 1px solid ${lightGray};
  border-radius: 8px;
  padding: 10px;
  gap: 8px;
  ${theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

const ChartItemCol = styled.li`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  font-weight: bold;
  overflow: hidden;
  word-wrap: break-word;
  ${theme.breakpoints.mobile} {
    flex-basis: 20px;
  }
`;

export const ChartItem: React.FC<IChartObj> = ({ chart }) => {
  const dispatch = useDispatch();
  const [isModalEdit, setModalEdit] = useState(false);

  const handleOpenEdit = () => {
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
        dataName: '',
      })
    );
  };

  return (
    <ChartItemWrapper color={chart.color}>
      <ChartItemRow>
        <ChartItemCol>
          {chart.name ? `Name: ${chart.name}` : 'Name: no name'}
        </ChartItemCol>
        <ChartItemCol>
          {chart.type ? `Type: ${chart.type}` : 'Type: spline'}
        </ChartItemCol>
        <ChartItemCol>
          {chart.dataName ? `Value: ${chart.dataName}` : 'Value: data-1'}
        </ChartItemCol>
        <Button
          mw={150}
          p="10px 0"
          bg={lightBtn}
          fBasis="0"
          onClick={handleOpenEdit}
          fGrow={1}
          fShrink={1}
          hoverBg={lightHover}
        >
          Edit
        </Button>
        <Button
          mw={150}
          p="10px 0"
          bg={redBtn}
          fBasis="0"
          onClick={handleDelete}
          fGrow={1}
          fShrink={1}
          hoverBg={redHover}
          color="#fff"
        >
          Delete
        </Button>
      </ChartItemRow>
      {isModalEdit && (
        <Modal
          chart={chart}
          isModalEdit={isModalEdit}
          setModalEdit={setModalEdit}
        />
      )}
    </ChartItemWrapper>
  );
};
