import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;
  margin-bottom: 1 rerem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;


  
  .projects {
    height: 75%;
  }

  content{
    transition: transform .2s;
  }
  content:hover{
    transform: scale(1.1);
  }

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
    margin-bottom: 0.5rem;
    margin-left: 0.1rem;
    border-bottom: 5px ridge #6c63ff;
    padding-bottom: 4px;
    width: 85%;
    font-weight: 900;
    font-size: 14pt;
    text-overflow: ellipsis;
  }
  h4:hover{
    width: 100%;
    transition: .5s;
  }

  .map{
    content: "";
    width: 43%;
    @media (max-width: 960px) {
      width: 100%;
    }
  
    @media (max-width: 680px) {
      width: 100%;
    }
  }

  .digitech{
    width: 66%;
    @media (max-width: 960px) {
      width: 100%;
    }
  
    @media (max-width: 680px) {
      width: 100%;
    }
  }

  .tutor{
    width: 51%;
    @media (max-width: 960px) {
      width: 100%;
    }
  
    @media (max-width: 680px) {
      width: 100%;
    }
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
    border-radius: 12px;
    width: 65%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  button{
    cursor: pointer;
    padding: 0.3rem 0.5rem;
    color: #fff;
    border: none;
    background: #6c63ff;
    margin: 0 0.5rem 1.5rem 0;
    border-radius: 12px;
    text-align: center;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;


