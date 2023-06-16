import { styled } from 'styled-components';

export const Item = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 3.125rem;
  width: 100%;
  padding: 0.5rem 0.25rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.baseButton};
`;

export const InfoArea = styled.div`
  flex: 1;
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const ActionArea = styled.div`
  display: flex;
  gap: 0.5rem;
`;
