import './nav.public.layout.scss';
// assets
import Logo from '@assets/img/logo.svg';

const NavPublicLayout = () => {
  return (
    <section className='nav-public-layout'>
      <header className='container'>
        <img
          src={Logo}
          alt='Pragma S.A.S'
          width={155}
          height={44}
          loading='lazy'
        />

        <p>Este será un link</p>
      </header>
    </section>
  );
};

export default NavPublicLayout;
