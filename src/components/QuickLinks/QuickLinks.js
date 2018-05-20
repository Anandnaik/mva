import React, { PropTypes } from 'react';

const QuickLinks = (props) => {
  const renderLinks = () => props.links.map((link, index) => {
    const renderExternalLinkIcon = () => (
      <span className="quick-links__icon-container">
        <i className="fas fa-external-link-alt" />
      </span>
    );
    return (
      <li key={`quick-links-${index}`}>
        <a className="quick-links__link"
          href={link.url}
          target={link.isExternal ? '_blank' : '_self'}
        >
          {link.text}
          {link.isExternal && renderExternalLinkIcon()}
        </a>
      </li>
    )
  });

  return (
    <div className="quick-links">
      <header className="quick-links__title">
        <span className="quick-links__dhamma-leaf"/>
        Quick Links
      </header>
      <ul className="quick-links__links-container">
        {renderLinks()}
      </ul>
    </div>
  );
};

QuickLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.string,
      isExternal: PropTypes.bool
    })
  )
};

export default QuickLinks;
