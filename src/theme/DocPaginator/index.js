import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import PaginatorNavLink from '@theme/PaginatorNavLink';

const DocPaginator = props => {
  const { previous, next } = props;

  return (
    <nav
      className="pagination-nav docusaurus-mt-lg"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      <div className="group flex-1 h-max">
        {previous && (
          <PaginatorNavLink
            {...previous}
            subLabel={
              <Translate
                id="theme.docs.paginator.previous"
                description="The label used to navigate to the previous doc"
              >
                Previous
              </Translate>
            }
          />
        )}
      </div>
      <div className="group flex-1 h-max">
        {next && (
          <PaginatorNavLink
            {...next}
            subLabel={
              <Translate id="theme.docs.paginator.next" description="The label used to navigate to the next doc">
                Next
              </Translate>
            }
            isNext
          />
        )}
      </div>
    </nav>
  );
};

export default DocPaginator;
