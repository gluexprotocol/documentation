import React, { JSX } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocPaginator from '@theme/DocPaginator';

const DocItemPaginator = (): JSX.Element => {
  const { metadata } = useDoc();

  return <DocPaginator previous={metadata.previous} next={metadata.next} />;
};

export default DocItemPaginator;
