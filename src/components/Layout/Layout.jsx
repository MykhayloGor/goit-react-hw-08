import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={s.container}>
      <AppBar />
      <main className={s.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;