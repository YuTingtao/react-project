import { useStore } from '@/store';
import styles from './Home.module.scss';

export default function Home() {
  const userInfo = useStore((state) => state.userInfo);

  return (
    <div className={styles['home-page']}>
      <div className={styles['welcome-title']}>您好，{userInfo.name}</div>
      <div>欢迎使用 React 企业中台管理系统</div>
    </div>
  );
}
