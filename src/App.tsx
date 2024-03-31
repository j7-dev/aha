import React from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { PasswordInput, Calendar, AdvancedEffects } from './pages';

const { Header, Content, Sider } = Layout;

const items: MenuProps['items'] = [
	{
		key: `passwordInput`,
		label: `Password Input`,
	},
	{
		key: `calendar`,
		label: `Calendar`,
	},
	{
		key: `advancedEffects`,
		label: `AdvancedEffects`,
	},
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className='text-white'>AHA EXAM</h1>

      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['passwordInput']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>

          <Content
            style={{
              padding: 24,
              marginTop: 24,
              minHeight: 'calc(100vh - 7rem)',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;