import React, { JSX } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocPaginator from '@theme/DocPaginator';

const DocItemPaginator = (): JSX.Element => {
  const { metadata } = useDoc();

  function clearTitle(label) {
    let lb = label;

    const labelParts = label.split(' ');
    if (labelParts.length > 1 && labelParts[0].startsWith('label-icon-')) {
      lb = labelParts.slice(1).join(' ');
    }

    return lb;
  }

  const previous = metadata.previous
    ? { permalink: metadata.previous.permalink, title: clearTitle(metadata.previous.title ?? '') }
    : null;

  const next = metadata.next
    ? { permalink: metadata.next.permalink, title: clearTitle(metadata.next.title ?? '') }
    : null;

  return <DocPaginator previous={previous} next={next} />;
};

export default DocItemPaginator;
