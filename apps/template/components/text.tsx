import React from 'react';

export const Text = ({ text, borderWidth, borderColor, borderStyle }) => {
  return (
    <div
      style={{
        borderWidth,
        borderColor,
        borderStyle,
      }}
    >
      {text}
    </div>
  );
};
