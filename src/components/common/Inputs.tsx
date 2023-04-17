import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const inputStyles = `
  width: 100%;
  padding: 10px;
  font-size: inherit;
  border-radius: 8px;
  border: 1px solid ${({
    theme,
  }: {
    theme: { colors: { border: { lightGray: string } } };
  }) => theme.colors.border.lightGray};
  ::placeholder {
    color: ${({
      theme,
    }: {
      theme: { colors: { border: { lightGray: string } } };
    }) => theme.colors.border.lightGray};
  }
`;

export const InputText = styled.input`
  ${inputStyles}
`;

export const InputSelect = styled.select`
  ${inputStyles}
`;
