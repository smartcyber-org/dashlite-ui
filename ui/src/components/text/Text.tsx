import React, { ReactNode } from "react";
import classNames from "classnames";

// Define the props for the OverlineTitle component
export interface OverlineTitleProps {
  className?: string;
  alt?: boolean;
  tag?: keyof JSX.IntrinsicElements; // Allows any valid HTML tag name (e.g., 'h1', 'h2', 'p', etc.)
  children: ReactNode; // Children can be any valid React content
}

const OverlineTitle: React.FC<OverlineTitleProps> = ({ className, alt, tag = 'h6', children }) => {
  const classes = classNames({
    "overline-title": true,
    [`${className}`]: className,
    "overline-title-alt": alt,
  });

  // Render either the specified tag or default to h6
  const Tag = tag;

  return (
    <React.Fragment>
      <Tag className={classes}>{children}</Tag>
    </React.Fragment>
  );
};

export default OverlineTitle;