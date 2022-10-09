import React from 'react';

import './Button.scss';

const Button = ({ content, type }) => {
  return (
    <button className={`Button ${content === '0' ? 'zero' : ''} ${type || ''}`}>
      {content}
    </button>
  );
};

export default Button;
