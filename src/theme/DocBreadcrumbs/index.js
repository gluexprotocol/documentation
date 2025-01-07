import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useSidebarBreadcrumbs, useHomePageRoute } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';

import styles from './styles.module.css';

const BreadcrumbsItemLink = ({ children, href, isLast }) => {
  const className = 'breadcrumbs__link';

  if (isLast) {
    return (
      <span className={className} itemProp="name">
        {children}
      </span>
    );
  }

  return href ? (
    <Link className={className} href={href} itemProp="item">
      <span itemProp="name">{children}</span>
    </Link>
  ) : (
    <span className={className}>{children}</span>
  );
};

const BreadcrumbsItem = ({ children, active, index, addMicrodata }) => {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}
    >
      {children}
      <meta itemProp="position" content={String(index + 1)} />
    </li>
  );
};

const DocBreadcrumbs = () => {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      className={clsx(ThemeClassNames.docs.docBreadcrumbs, styles.breadcrumbsContainer)}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}
    >
      <ul className="breadcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href;

          let label = item.label;
          const labelParts = label.split(' ');
          if (labelParts.length > 1 && labelParts[0].startsWith('label-icon-')) {
            label = labelParts.slice(1).join(' ');
          }

          return (
            <BreadcrumbsItem key={idx} active={isLast} index={idx} addMicrodata={!!href}>
              <BreadcrumbsItemLink href={href} isLast={isLast}>
                {label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default DocBreadcrumbs;
