import { Outlet } from 'react-router';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Header>Header</Header>
      <Sider>Sider</Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default App;
