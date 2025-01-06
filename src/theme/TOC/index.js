import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import { useDoc } from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

const TOC = ({ className, ...props }) => {
  const { metadata } = useDoc();

  return (
    <div className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <TOCItems {...props} linkClassName={LINK_CLASS_NAME} linkActiveClassName={LINK_ACTIVE_CLASS_NAME} />
    </div>
  );
};

export default TOC;
