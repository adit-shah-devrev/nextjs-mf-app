import React from 'react';

export const Button = ({
  borderWidth,
  borderColor,
  borderStyle,
  children,
  text,
  styles,
}) => {
  return (
    <button
      style={{
        borderWidth,
        borderColor,
        borderStyle,
        ...styles,
      }}
    >
      {text}
      {children({ text: 'Hello There' })}
    </button>
  );
};
