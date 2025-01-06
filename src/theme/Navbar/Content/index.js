import React, { useEffect } from 'react';
import { useThemeConfig, ErrorCauseBoundary, useColorMode } from '@docusaurus/theme-common';
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

import styles from './styles.module.css';

const useNavbarItems = () => {
  return useThemeConfig().navbar.items;
};

const NavbarItems = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={error =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
};

const NavbarContentLayout = ({ left, right, searchBarItem }) => {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">
        {right}
        {!searchBarItem && (
          <NavbarSearch>
            <SearchBar />
          </NavbarSearch>
        )}
      </div>
    </div>
  );
};

const NavbarContent = () => {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find(item => item.type === 'search');
  // const [definedColorMode, setDefinedColorMode] = useState('');
  // useEffect(() => {
  //   setDefinedColorMode(colorMode);
  // }, [colorMode]);

  // const isDarkMode = definedColorMode === 'dark';
  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          {/* <NavbarItems items={leftItems} /> */}
          {/* <div className="">
            <NavbarColorModeToggle className={styles.colorModeToggle} />
          </div> */}
        </>
      }
      right={
        <>
          <NavbarItems items={rightItems} />
        </>
      }
    />
  );
};

export default NavbarContent;
