import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import GithubIcon from '@site/static/icons/github.svg';
import TwitterIcon from '@site/static/icons/twitter.svg';
import DiscordIcon from '@site/static/icons/discord.svg';
import LinkedInIcon from '@site/static/icons/linkedin.svg';
import YoutubeIcon from '@site/static/icons/youtube.svg';

import styles from './styles.module.css';

const CustomFooter = () => {
  return (
    <footer className={styles['custom-footer-wrapper']}>
      <div className={styles['logo-wrapper']}>
        <img src={useBaseUrl('/img/GlueX_logotipo_light.png')} className={styles['dark-theme-logo']} />
        <img src={useBaseUrl('/img/GlueX_logotipo_dark.png')} className={styles['light-theme-logo']} />
      </div>
      <div className={styles['copyright']}>{`© ${new Date().getFullYear()} GlueX. All rights reserved`}</div>
      <div className={styles['footerSocialIconsWrapper']}>
        <div className={styles['socialBrands']}>
          <Link href={'https://github.com/gluexprotocol'} rel="noopener noreferrer" aria-label={'Github'}>
            <GithubIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://x.com/GluexProtocol'} rel="noopener noreferrer" aria-label={'Twitter'}>
            <TwitterIcon />
          </Link>
        </div>
        <div className={styles['socialBrands']}>
          <Link href={'https://discord.gg/2jYDfawc'} rel="noopener noreferrer" aria-label={'Discord'}>
            <DiscordIcon />
          </Link>
        </div>
        {/* <div className={styles['socialBrands']}>
          <Link href={'#'} rel="noopener noreferrer" aria-label={'Youtube'}>
            <YoutubeIcon />
          </Link>
        </div> */}
        <div className={styles['socialBrands']}>
          <Link
            href={'https://www.linkedin.com/company/gluex-protocol'}
            rel="noopener noreferrer"
            aria-label={'Linkedin'}
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
