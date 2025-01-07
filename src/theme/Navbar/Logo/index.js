import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

const LogoThemedImage = ({ logo, alt, imageClassName }) => {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );

  return imageClassName ? <div className={imageClassName}>{themedImage}</div> : themedImage;
};

const Logo = props => {
  const {
    siteConfig: { title },
  } = useDocusaurusContext();
  const {
    navbar: { title: navbarTitle, logo },
  } = useThemeConfig();

  const { imageClassName, titleClassName, ...propsRest } = props;
  const logoLink = useBaseUrl(logo?.href || '/');

  const fallbackAlt = navbarTitle ? '' : title;
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link to={'https://gluex.xyz'} {...propsRest}>
      {logo && <LogoThemedImage logo={logo} alt={alt} imageClassName={imageClassName} />}
      {navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
    </Link>
  );
};

const NavbarLogo = () => {
  return (
    <div className="navbar__brand">
      <Logo imageClassName="navbar__logo" titleClassName="navbar__title text--truncate" />
    </div>
  );
};

export default NavbarLogo;
