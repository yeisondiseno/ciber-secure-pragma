import { ReactElement } from 'react';
import './public.layout.scss';

const PublicLayout = ({ children }: { children: ReactElement }) => {
  return (
    <main className="public-layout">
      <section className="container">
        <section className="card">{children}</section>
      </section>
    </main>
  );
};

export default PublicLayout;
