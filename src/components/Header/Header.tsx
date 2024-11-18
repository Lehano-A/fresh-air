import { useEffect, useState } from 'react';
import ButtonSubmit from '../common/ButtonSubmit/ButtonSubmit';
import Logo from '../common/Logo/Logo';
import Navigation from '../Main/Hero/Navigation/Navigation';

function Header() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const changeBgColor = () => {
      document.addEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };

    changeBgColor();
    return () => changeBgColor();
  }, []);

  const bgColorClass = scrollY > 0 ? 'header_bg-color' : '';
  const outerBgColorButtonSubmit = scrollY > 0 ? 'green' : 'white';

  return (
    <div className={`header ${bgColorClass}`}>
      <Logo />
      <Navigation />
      <ButtonSubmit
        name='связаться'
        variant='s'
        outerBgColor={outerBgColorButtonSubmit}
      />
    </div>
  );
}

export default Header;
