import React from 'react';
import clsx from 'clsx';
import { useWindowSize } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import CustomFooter from '@site/src/components/CustomFooter';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import type { Props } from '@theme/DocItem/Layout';

import styles from './styles.module.css';

const useDocTOC = () => {
  const { frontMatter, toc } = useDoc();
  const windowSize = useWindowSize();

  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;

  const mobile = canRender ? <DocItemTOCMobile /> : undefined;

  const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? <DocItemTOCDesktop /> : undefined;

  return {
    hidden,
    mobile,
    desktop,
  };
};

const DocItemLayout = ({ children }: Props) => {
  const docTOC = useDocTOC();

  return (
    <div className="row">
      <div className={clsx('col', styles.docItemCol)}>
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
          <CustomFooter />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
};

export default DocItemLayout;
