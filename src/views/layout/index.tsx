import AppHeader from './components/AppHeader';
import AppSider from './components/AppSider';
import { useStore } from '@/store';
import { Outlet } from 'react-router';
import './index.scss';

function App() {
  const isExpand = useStore((state) => state.isExpand);

  return (
    <>
      <AppHeader />
      <AppSider />
      <div className="app-main" style={{ paddingLeft: isExpand ? '210px' : '64px' }}>
        <div className="app-view">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
