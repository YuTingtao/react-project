import { StrictMode } from 'react';
import { RouterProvider } from 'react-router/dom';
import { router } from './router';
import { ConfigProvider } from 'antd';

export default function App() {
  return (
    <StrictMode>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#0074f5',
            borderRadius: 4,
            borderRadiusLG: 6
          }
        }}>
        <RouterProvider router={router}></RouterProvider>
      </ConfigProvider>
    </StrictMode>
  );
}
