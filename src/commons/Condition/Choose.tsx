import React from 'react';

export const Choose: React.FC = props => {
  let toReturn: React.ReactNode = null;

  if (Array.isArray(props.children)) {
    const {children} = props;

    for (let index = 0; index < children.length; index++) {
      const el = children[index];
      if (el.type.name === 'When' && el.props.condition) {
        return el;
      } else if (el.type.name === 'OtherWise') {
        return el;
      }
    }
  } else {
    return props.children;
  }
  for (let index = 0; index < props.children.length; index++) {
    const el = props.children[index];
    if (el.type.name === 'Otherwise') {
      return el;
    }
  }

  return toReturn;
};
