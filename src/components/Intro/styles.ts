import { styled } from 'styled-components';

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;
  height: 34rem;
  backdrop-filter: blur(5px);
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 36.75rem;
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

export const Image = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`;
