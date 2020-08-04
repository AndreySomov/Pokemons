import * as React from 'react';
import { Layout } from 'antd';

import Filters from './Filters';
import SearchInput from './SearchInput';

const { Content, Header, Sider } = Layout;


const LayoutComponent: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SearchInput />
      </Header>
      <Layout>
        <Sider>
          <Filters />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
