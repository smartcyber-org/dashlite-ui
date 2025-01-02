import React, { ReactNode } from 'react';
import Icon from '../icon/Icon';
import classNames from 'classnames';
import Link from 'next/link';

export interface BlockProps {
  className?: string;
  size?: 'sm' | 'lg' | 'xl'; // Adjust according to your possible size values
  tag?: keyof JSX.IntrinsicElements; // This allows specifying any valid HTML tag (e.g., 'h1', 'h2', etc.)
  wide?: 'sm' | 'lg' | 'xl';
  page?: boolean;
  link?: string;
  icon?: string;
  children: ReactNode;
}

export const Block: React.FC<BlockProps> = ({ className, size, children }) => {
  const blockClass = classNames({
    'nk-block': true,
    [`nk-block-${size}`]: size,
    [`${className}`]: className,
  });
  return <div className={blockClass}>{children}</div>;
};

export const Content: React.FC<BlockProps> = ({ className, children }) => {
  const blockContentClass = classNames({
    'nk-block-content': true,
    [`${className}`]: className,
  });
  return <div className={blockContentClass}>{children}</div>;
};

export const Between: React.FC<BlockProps> = ({ className, children }) => {
  return (
    <div className={`nk-block-between ${className || ''}`}>{children}</div>
  );
};

export const Head: React.FC<BlockProps> = ({
  className,
  size,
  wide,
  children,
}) => {
  const blockHeadClass = classNames({
    'nk-block-head': true,
    [`nk-block-head-${size}`]: size,
    [`wide-${wide}`]: wide,
    [`${className}`]: className,
  });
  return <div className={blockHeadClass}>{children}</div>;
};

export const HeadContent: React.FC<BlockProps> = ({ className, children }) => {
  return (
    <div className={`nk-block-head-content${className ? ' ' + className : ''}`}>
      {children}
    </div>
  );
};

const Title: React.FC<BlockProps> = ({
  className = '',
  page,
  children,
  tag: Tag = 'h3',
}) => {
  const compClass = classNames(
    'nk-block-title',
    page ? 'page-title' : 'title',
    className
  );
  return <Tag className={compClass}>{children}</Tag>;
};

const Des: React.FC<BlockProps> = ({ className = '', children }) => {
  const compClass = classNames('nk-block-des', className);
  return <div className={compClass}>{children}</div>;
};

const HeadSub: React.FC<BlockProps> = ({ className = '', children }) => {
  const compClass = classNames('nk-block-head-sub', className);
  return <div className={compClass}>{children}</div>;
};

const BackTo: React.FC<BlockProps> = ({
  className = '',
  link = '#',
  icon,
  // onClick,
  children,
}) => {
  const compClass = classNames('back-to', className);

  return (
    <div className="nk-block-head-sub">
      <Link href={link} className={compClass}>
        {/* Render the icon if provided */}
        {icon && <Icon name={icon} />}
        <span>{children}</span>
      </Link>
    </div>
  );
};

Block.displayName = 'Block'; // Set the display name

// Attach subcomponents to the Block component for easier import and usage
export default Object.assign(Block, {
  Head,
  HeadContent,
  Content,
  Between,
  Title,
  Des,
  HeadSub,
  BackTo,
});
