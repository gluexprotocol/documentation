import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';

import styles from './styles.module.css';

const TagsRow = props => {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterTagsRow, 'row margin-bottom--sm')}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
};

const EditMetaRow = ({ editUrl, lastUpdatedAt, lastUpdatedBy, formattedLastUpdatedAt }) => {
  return (
    <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
      <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div className={clsx('col', styles.lastUpdated)}>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
};

const DocItemFooter = () => {
  const { metadata } = useDoc();

  const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  if (!canDisplayFooter) {
    return null;
  }

  return (
    <>
      <footer className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
        {canDisplayTagsRow && <TagsRow tags={tags} />}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
          />
        )}
      </footer>
    </>
  );
};

export default DocItemFooter;
