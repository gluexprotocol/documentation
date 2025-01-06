import React from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';

import styles from './styles.module.css';

const CloseButton = () => {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}
    >
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
};

const NavbarMobileSidebarHeader = () => {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      {/* <div className='pr-6'>
        <DocsLogoLight />
      </div> */}
      {/* <NavbarColorModeToggle className={'margin-right--md ' + styles.colorModeToggle} /> */}
      <CloseButton />
    </div>
  );
};

export default NavbarMobileSidebarHeader;
