import React from 'react';

import './Button.scss';

const Button = ({ content, type, onClick }) => {
  return (
    <button
      onClick={onClick(content)}
      className={`Button ${content === '0' ? 'zero' : ''} ${type || ''}`}
    >
      {content}
    </button>
  );
};

export default Button;
