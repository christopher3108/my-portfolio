import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#efeeff' : '#353535')};
  height: 85%;
  margin-bottom: 1.5rem;
  border-radius: 18px;
  border: none;
`;
