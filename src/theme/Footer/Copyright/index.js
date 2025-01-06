import React from 'react';

const FooterCopyright = ({ copyright }) => {
  return (
    <div
      className="footer__copyright"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  );
};

export default FooterCopyright;
