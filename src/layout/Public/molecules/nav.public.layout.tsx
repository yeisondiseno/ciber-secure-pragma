import './nav.public.layout.scss';
// assets
import Logo from '@assets/img/logo.svg';

const NavPublicLayout = () => {
  return (
    <section className='container'>
      <header className='nav-public-layout'>
        <img src={Logo} alt='Pragma S.A.S' />

        <p>Este es un texto</p>
      </header>
    </section>
  );
};

export default NavPublicLayout;
