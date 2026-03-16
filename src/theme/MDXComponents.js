import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import Details from '@theme/Details';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const CardGroup = ({ children, cols = 2 }) => {
  return <div className="card-group" style={{ '--cols': cols }}>{children}</div>;
};

const Card = ({ title, icon, href, children }) => {
  const Component = href ? 'a' : 'div';
  return (
    <Component href={href} className="mintlify-card">
      {title && <h3>{icon && <span style={{ marginRight: '0.5rem' }}>{icon}</span>}{title}</h3>}
      <p>{children}</p>
    </Component>
  );
};

const AccordionGroup = ({ children }) => (
  <div className="accordion-group">{children}</div>
);

const Accordion = ({ title, children }) => (
  <Details summary={<summary>{title}</summary>}>
    {children}
  </Details>
);

const Warning = ({ children }) => <Admonition type="warning">{children}</Admonition>;
const Note = ({ children, title }) => <Admonition type="note" title={title}>{children}</Admonition>;
const Tip = ({ children, title }) => <Admonition type="tip" title={title}>{children}</Admonition>;

const Steps = ({ children }) => <div className="mintlify-steps">{children}</div>;
const Step = ({ title, children }) => (
  <div className="mintlify-step" style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '2px solid var(--ifm-color-primary)' }}>
    {title && <h4>{title}</h4>}
    <div>{children}</div>
  </div>
);

const CustomTabs = ({ children, ...props }) => {
  const tabs = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    // Map Mintlify's 'title' prop to Docusaurus 'label' and 'value'
    const title = child.props.title || `tab-${index}`;
    return React.cloneElement(child, {
      ...child.props,
      value: title,
      label: title,
    });
  });
  return <Tabs {...props}>{tabs}</Tabs>;
};

export default {
  ...MDXComponents,
  CardGroup,
  Card,
  AccordionGroup,
  Accordion,
  Warning,
  Note,
  Tip,
  Tabs: CustomTabs,
  Tab: TabItem,
  Steps,
  Step,
};
