import React from 'react';
import Logo from '@theme/Logo';

const NavbarLogo = () => {
  return (
    <div className="navbar__brand">
      <Logo imageClassName="navbar__logo" titleClassName="navbar__title text--truncate" />
    </div>
  );
};

export default NavbarLogo;
