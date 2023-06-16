import { styled } from 'styled-components';

export const Field = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.baseButton};

  input {
    font-size: 1rem;
    width: 1.25rem;
    height: 1.25rem;
    background-color: transparent;
    outline: 0;
    border: 0;
    text-align: center;
    -moz-appearance: textfield;
    margin: 0;

    color: ${(props) => props.theme.colors.baseTitle};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const ControlButton = styled.button`
  display: flex;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: color 0.3s;
  outline: 0;

  color: ${(props) => props.theme.colors.purple};

  &:hover {
    color: ${(props) => props.theme.colors.purpleDark};
  }
`;
