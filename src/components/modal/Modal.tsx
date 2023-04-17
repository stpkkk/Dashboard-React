import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { addChart, editChart, useAppDispatch } from '../../redux';
import { AppContext } from '../../context';
import { selectModalData } from '../../data';
import { ColorPicker } from './ColorPicker';
import { Select } from './Select';
import { IOption, IModal } from '../../models';
import { theme } from '../../styles';
import { Button, Typography } from '../common';
import { InputName } from './InputName';

const {
  background: { form },
  hover: { redHover, blueHover },
  button: { blueBtn },
} = theme.colors;

const ModalWrapper = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
`;

const ModalContent = styled.div<{ active: boolean }>`
  background-color: ${form};
  color: #000;
  max-width: 450px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: translateY(${(props) => (props.active ? 0 : '-20px')});
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  ${theme.breakpoints.mobile} {
    border-radius: 0;
    height: 100%;
  }
`;

export const Modal: React.FC<IModal> = ({
  chart,
  setModalEdit,
  isModalEdit,
}) => {
  const dispatch = useAppDispatch();
  const { isModal, setModal, chartsData } = useContext(AppContext);

  const [chartName, setChartName] = useState(chart.name);
  const [chartType, setChartType] = useState(chart.type);
  const [chartColor, setChartColor] = useState(chart.color);
  const [chartDataName, setChartDataName] = useState(chart.dataName);

  const handleChangeAdd = () => {
    dispatch(
      addChart({
        id: Math.random().toString().substr(3, 3),
        name: chartName,
        color: chartColor,
        type: chartType,
        data: chartsData[chartDataName],
        dataName: chartDataName,
      })
    );
    setModal(false);
  };

  const handleChangeEdit = () => {
    dispatch(
      editChart({
        id: chart.id,
        name: chartName,
        type: chartType,
        data: chartsData[chartDataName],
        color: chartColor,
        dataName: chartDataName,
      })
    );
    setModalEdit(false);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isModalEdit) {
      handleChangeEdit();
    } else {
      handleChangeAdd();
    }
  };

  const handleClickCloseModal = () => {
    setModal(false);
    setModalEdit(false);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      setModal(false);
      setModalEdit(false);
    }
  };

  const handleChangeChartType = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartType(event.target.value);
  };

  const handleChangeChartData = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChartDataName(event.target.value);
  };

  const optionsChartType: IOption[] = selectModalData.typeOptions.map(
    (option) => ({
      id: option.id,
      value: option.value,
      label: option.label,
    })
  );

  const optionsChartDataName: IOption[] = selectModalData.dataNameOptions.map(
    (option) => ({
      id: option.id,
      value: option.value,
      label: option.label,
    })
  );

  return (
    <ModalWrapper
      active={isModal || isModalEdit}
      onClick={handleClickCloseModal}
      onKeyDown={handleKeyDown}
    >
      <ModalContent
        active={isModal || isModalEdit}
        onKeyDown={handleKeyDown}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Button
            p="0"
            float="right"
            mw={30}
            hoverBg={redHover}
            onClick={handleClickCloseModal}
          >
            <IoMdClose size={30} />
          </Button>
          <Typography fz={28} lh={36} m="0 0 16px">
            {isModalEdit ? 'Edit Chart' : 'Add Chart'}
          </Typography>
          <InputName setChartName={setChartName} chartName={chartName} />
          <Select
            selectName="chart-type"
            selectLabel="Chart type:"
            onChange={handleChangeChartType}
            selectValue={chartType}
            options={optionsChartType}
          />
          <Select
            selectName="chart-data"
            selectLabel="Chart values:"
            onChange={handleChangeChartData}
            selectValue={chartDataName}
            options={optionsChartDataName}
          />
          <ColorPicker chartColor={chartColor} setChartColor={setChartColor} />
          <Button
            bg={blueBtn}
            hoverBg={blueHover}
            p="10px 0"
            mw={100}
            color="#fff"
          >
            {isModalEdit ? 'Edit' : 'Save'}
          </Button>
        </form>
      </ModalContent>
    </ModalWrapper>
  );
};
