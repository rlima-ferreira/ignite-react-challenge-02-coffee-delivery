import { styled } from 'styled-components';

export const Form = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px;
  margin-top: 1rem;

  background-color: ${(props) => props.theme.colors.baseCard};

  label {
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelSm = styled(Label)`
  min-width: 3.75rem;
  width: 3.75rem;
`;

export const LabelMd = styled(Label)`
  min-width: 12.5rem;
  width: 12.5rem;
`;

export const LabelFull = styled(Label)`
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
