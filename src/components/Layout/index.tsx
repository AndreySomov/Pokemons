import * as React from 'react';
import { Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

const LayoutComponent: React.FC = ({ children }) => (
  <Layout>
    <Sider>Sider</Sider>
    {children}
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
);

export default LayoutComponent;