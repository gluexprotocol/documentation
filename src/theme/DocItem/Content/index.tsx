import React, { JSX } from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type { Props } from '@theme/DocItem/Content';

import CustomGuideDoc from './GuideDocs';

const useSyntheticTitle = (): string | null => {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
  return shouldRender ? metadata.title : null;
};

const checkIsGuide = (): boolean => {
  const { frontMatter } = useDoc();
  return frontMatter.is_guide || false;
};

const DocItemContent = ({ children }: Props): JSX.Element => {
  const syntheticTitle = useSyntheticTitle();
  const isGuide = checkIsGuide();

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      {isGuide ? <CustomGuideDoc>{children}</CustomGuideDoc> : <MDXContent>{children}</MDXContent>}
    </div>
  );
};

export default DocItemContent;
