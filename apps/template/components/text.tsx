import React from 'react';

export const Text = ({
  text,
  borderWidth,
  borderColor,
  borderStyle,
  childrenProps,
}) => {
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
