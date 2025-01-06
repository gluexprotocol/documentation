import React from 'react';
import LinkItem from '@theme/Footer/LinkItem';

const Separator = () => {
  return <span className="footer__link-separator">·</span>;
};

const SimpleLinkItem = ({ item }) => {
  return item.html ? (
    <span
      className="footer__link-item"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <LinkItem item={item} />
  );
};

const FooterLinksSimple = ({ links }) => {
  return (
    <div className="footer__links text--center">
      <div className="footer__links">
        {links.map((item, i) => (
          <React.Fragment key={i}>
            <SimpleLinkItem item={item} />
            {links.length !== i + 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FooterLinksSimple;
