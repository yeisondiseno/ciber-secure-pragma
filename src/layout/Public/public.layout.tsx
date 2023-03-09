import { ReactElement } from 'react';
import './public.layout.scss';
// components
import NavPublicLayout from './molecules/nav.public.layout';

const PublicLayout = ({ children }: { children: ReactElement }) => {
  return (
    <main className='public-layout'>
      <NavPublicLayout />
      <section className='container'>
        <section className='card'>{children}</section>
      </section>
    </main>
  );
};

export default PublicLayout;
