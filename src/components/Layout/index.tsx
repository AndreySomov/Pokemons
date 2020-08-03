import * as React from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

const LayoutComponent: React.FC = ({ children }) => (
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>{children}</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
);

export default LayoutComponent;
