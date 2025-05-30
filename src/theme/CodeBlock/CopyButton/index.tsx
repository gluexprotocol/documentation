import React, { useCallback, useState, useRef, useEffect, JSX } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import type { Props } from '@theme/CodeBlock/CopyButton';
import IconCopy from '@theme/Icon/Copy';
import IconSuccess from '@theme/Icon/Success';

import { copyToClipboard } from './utils';
import styles from './styles.module.css';

const CopyButton = ({ code, className }: Props): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef<number | undefined>(undefined);

  // handleCopyCode is the only REAL addition to this swizzled component.
  // We simply call it whenever the button is clicked.
  const handleCopyCode = useCallback(async () => {
    try {
      await copyToClipboard(code);
      setIsCopied(true);
      copyTimeout.current = window.setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy text:', err);
      setIsCopied(false);
    }
  }, [code]);

  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);

  return (
    <button
      type="button"
      data-attr={code}
      aria-label={
        isCopied
          ? translate({
              id: 'theme.CodeBlock.copied',
              message: 'Copied',
              description: 'The copied button label on code blocks',
            })
          : translate({
              id: 'theme.CodeBlock.copyButtonAriaLabel',
              message: 'Copy code to clipboard',
              description: 'The ARIA label for copy code blocks button',
            })
      }
      title={translate({
        id: 'theme.CodeBlock.copy',
        message: 'Copy',
        description: 'The copy button label on code blocks',
      })}
      className={clsx('clean-btn', className, styles.copyButton, isCopied && styles.copyButtonCopied)}
      onClick={handleCopyCode}
    >
      <span className={styles.copyButtonIcons} aria-hidden="true">
        <IconCopy className={styles.copyButtonIcon} />
        <IconSuccess className={styles.copyButtonSuccessIcon} />
      </span>
    </button>
  );
};

export default CopyButton;
