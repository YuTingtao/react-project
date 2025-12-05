import { useStore } from '@/store';
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import './appHeader.scss';
import type { UserInfo } from '@/api/account/types';

export default function AppHeader() {
  const userInfo = useStore((state) => state.userInfo);
  const isExpand = useStore((state) => state.isExpand);
  const toggleIsExpand = useStore((state) => state.toggleIsExpand);
  const setToken = useStore((state) => state.setToken);
  const setUserInfo = useStore((state) => state.setUserInfo);

  // 退出登录
  function handleLogout() {
    setToken('');
    setUserInfo({} as UserInfo);
  }

  return (
    <div className="app-header" style={{ left: isExpand ? '210px' : '64px' }}>
      <div className={'menu-collapse'} onClick={toggleIsExpand}>
        {isExpand ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
      </div>

      <div className="app-header-right">
        <Dropdown
          menu={{
            items: [{ key: 'logout', label: '退出登录' }],
            onClick: (info) => {
              if (info.key === 'logout') {
                handleLogout();
              }
            }
          }}>
          <div className="app-header-avatar">
            <Avatar icon={<UserOutlined />} />
            <span className="item-name">{userInfo.name}</span>
            <DownOutlined className="icon-down" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
