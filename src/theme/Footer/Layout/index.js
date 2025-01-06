import React from 'react';
import clsx from 'clsx';

const FooterLayout = ({ style, links, logo, copyright }) => {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    ></footer>
  );
};

export default FooterLayout;
