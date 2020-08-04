import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  transition: 0.2s ease-out;
  box-shadow: 2px 7px 9px rgba(0,0,0,0.4);
  margin: 20px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0px 12px 12px rgba(0,0,0,0.5);
  };
`;
