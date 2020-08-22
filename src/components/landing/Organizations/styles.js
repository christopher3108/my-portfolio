import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 2fr);
  grid-template-rows: 8fr;
  gap: 1rem 1rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    margin-bottom: 0.5rem;
    margin-left: 0.1rem;
  }

  h5 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#252525' : '#fff')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  
  img{
    border-radius: 50%;
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition: transform .4s;
  }
  img:hover{
    transform: scale(1.2);
  }

  button{
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    color: #212121;
    border: none;
    background: #ffbd89;
    margin: 0 0.5rem 1.5rem 0;
    border-radius: 12px;
    text-align: center;
  }
`;
