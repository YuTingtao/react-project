import { useStore } from '@/store';
import './AppSider.scss';
import logoImg from '@/assets/img/logo.png';

function AppSider() {
  const isExpand = useStore((state) => state.isExpand);

  return (
    <div className="app-sider" style={{ width: isExpand ? '210px' : '64px' }}>
      <div className={'app-sider-top' + (isExpand ? '' : ' is-expand')}>
        <img className="app-sider-logo" src={logoImg} alt="" />
        <span>React管理后台</span>
      </div>
    </div>
  );
}

export default AppSider;
