import * as React from 'react';
import { Layout } from 'antd';

import Filters from './Filters';
import SearchInput from './SearchInput';

const { Content, Sider } = Layout;

const LayoutComponent: React.FC = ({ children }) => {
  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <Layout style={{ height: '100%' }}>
        <Sider width="20%" style={{ background: 'white', padding: '20px' }}>
          <SearchInput />
          <Filters />
        </Sider>
        <Content style={{ height: '100%', width: '100%' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
