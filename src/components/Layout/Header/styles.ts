import styled from 'styled-components';

import { metrics } from 'theme';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    height: ${metrics.header.height.desktop}px;
    padding: 28px 11px 0 64px;
`;

