import styled from 'styled-components';

type FilterProps = {
  disabled: boolean;
};

export const Container = styled.div<FilterProps>`
  opacity: ${({ disabled }) => (disabled ? 1 : 0)};
  transition: all 0.5s ease-out;
`;
