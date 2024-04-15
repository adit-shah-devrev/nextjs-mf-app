import React from 'react';
import { Styles, Section, Component } from './types';

const parseDisplayStyles = (styles: Styles['display']) => {
  return {
    height: styles.height,
    width: styles.width,
    padding: styles.padding,
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
  componentsMap: Record<string, any>,
  props?: Record<string, unknown>
) => {
  const Component = componentsMap[component.name]?.Component;
  const childrenType = componentsMap[component.name]?.childrenType;
  const styles = parseStyles(component.styles);

  if (childrenType !== 'function') {
    return (
      <Component styles={styles} {...component.props} {...props}>
        {component.children?.map((child, index) => {
          return child.type === 'component'
            ? parseComponent(child, componentsMap)
            : parseSection(child, componentsMap);
        })}
      </Component>
    );
  }

  return (
    <Component styles={styles} {...component.props}>
      {(props) =>
        component.children?.map((child, index) => {
          return child.type === 'component'
            ? parseComponent(child, componentsMap, props)
            : parseSection(child, componentsMap);
        })
      }
    </Component>
  );
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
