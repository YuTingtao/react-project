import { useNavigate } from 'react-router';
import { useStore } from '@/store';
import { Menu } from 'antd';
import { HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import './appSider.scss';
import logoImg from '@/assets/img/logo.png';

const menuItems = [
  {
    key: '/home',
    icon: <HomeOutlined />,
    label: '首页'
  },
  {
    key: '/org-user',
    icon: <UsergroupAddOutlined />,
    label: '组织用户管理',
    children: [
      {
        key: '/org-user/org',
        icon: '',
        label: '组织管理'
      },
      {
        key: '/org-user/user',
        icon: '',
        label: '用户管理'
      },
      {
        key: '/org-user/role',
        icon: '',
        label: '角色管理'
      }
    ]
  }
];

export default function AppSider() {
  const isExpand = useStore((state) => state.isExpand);
  const navigate = useNavigate();

  function handleMenuClick({ key }: { key: string }) {
    navigate(key);
  }

  return (
    <div className="app-sider" style={{ width: isExpand ? '210px' : '64px' }}>
      <div className={'app-sider-top' + (isExpand ? '' : ' is-expand')}>
        <img className="app-sider-logo" src={logoImg} alt="" />
        <span>React企业中台</span>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        inlineCollapsed={!isExpand}
        defaultSelectedKeys={['/home']}
        items={menuItems}
        onClick={handleMenuClick}
      />
    </div>
  );
}
