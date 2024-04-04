import React from 'react';
import { Styles, Section, Component } from './types';

const parseDisplayStyles = (styles: Styles['display']) => {
  return {
    height: styles.height,
    width: styles.width,
  };
};

const parseLayoutStyles = (styles: Styles['layout']) => {
  if (styles.type === 'flex') {
    return {
      display: 'flex',
      flexDirection: styles.direction,
      justifyContent: styles.justifyContent,
      alignItems: styles.alignItems,
    };
  } else if (styles.type === 'grid') {
    return {
      display: 'grid',
      gridTemplateColumns: styles.templateColumns,
      gridTemplateRows: styles.templateRows,
    };
  }
  return {};
};

const parseStyles = (displayStyles: Styles) => {
  return {
    ...parseLayoutStyles(displayStyles.layout),
    ...parseDisplayStyles(displayStyles.display),
  };
};

const parseComponent = (
  component: Component,
  componentsMap: Record<string, any>
) => {
  const Component = componentsMap[component.name]?.Component;
  const styles = parseStyles(component.styles);

  return <Component style={styles} {...component.props} />;
};

const parseSection = (section: Section, componentsMap: Record<string, any>) => {
  const styles = parseStyles(section.styles);
  
  return (
    <div style={styles}>
      {section.children.map((child, index) =>
        child.type === 'component'
          ? parseComponent(child, componentsMap)
          : parseSection(child, componentsMap)
      )}
    </div>
  );
};

export const parsePageLayout = (
  layout: Section,
  componentsMap: Record<string, any>
): JSX.Element => parseSection(layout, componentsMap);
