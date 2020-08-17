import * as React from 'react';
import { Layout } from 'antd';

import Filters from './Filters';
import SearchInput from './SearchInput';

const { Content, Sider } = Layout;

const LayoutComponent: React.FC = ({ children }) => (
  <Layout hasSider style={{ color: 'white', height: '100vh', backgroundColor: '#181C1D' }}>
    <Layout style={{ height: '100%', color: 'white' }}>
      <Sider width="15%" style={{ color: 'white', background: 'black', padding: '20px' }}>
        <SearchInput />
        <Filters />
      </Sider>
      <Content
        style={{
          background: '#181C1D',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
);

export default LayoutComponent;
