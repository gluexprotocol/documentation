import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

const DocRootLayoutMain = ({ hiddenSidebarContainer, children }) => {
  const sidebar = useDocsSidebar();

  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        {children}
      </div>
    </main>
  );
};

export default DocRootLayoutMain;
