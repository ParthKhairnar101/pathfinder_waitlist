import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

interface InstagramLinkProps {
  url: string;
  className?: string;
}

const InstagramLink: React.FC<InstagramLinkProps> = ({ url, className }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      <FontAwesomeIcon icon={faInstagram} size="lg" />
    </a>
  );
};

InstagramLink.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { InstagramLink };