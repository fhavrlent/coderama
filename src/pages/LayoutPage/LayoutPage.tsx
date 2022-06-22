import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

export const LayoutPage = () => {
  const { pathname } = window.location;
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/"]}
          selectedKeys={[pathname]}
        >
          <Menu.Item key="/" onClick={() => navigate("/")}>
            Search
          </Menu.Item>
          <Menu.Item key="/favorites" onClick={() => navigate("/favorites")}>
            Favorites
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
