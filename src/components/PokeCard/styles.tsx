import styled from 'styled-components';

export const Container = styled.div`
  transition: 0.2s ease-out;
  margin: 20px;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  min-width: 330px;
  max-width: 330px;
  max-height: 453px;
  &:hover {
    transform: translateY(-15px);
  };
`;
