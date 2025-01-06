import React from 'react';
import clsx from 'clsx';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import CustomFooter from '@site/src/components/CustomFooter';
import type { Props } from '@theme/DocItem/Layout';

import styles from './styles.module.css';

const DocItemLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="row">
      <div className={clsx('col', styles.docItemCol)}>
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          <CustomFooter />
        </div>
      </div>
    </div>
  );
};

export default DocItemLayout;
