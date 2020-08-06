import styled from 'styled-components';

export const Container = styled.div`
  transition: 0.2s ease-out;
  box-shadow: 2px 7px 9px rgba(0,0,0,0.4);
  margin: 20px;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  max-width: 320px;
  max-height: 453px;
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0px 12px 12px rgba(0,0,0,0.5);
  };
`;
