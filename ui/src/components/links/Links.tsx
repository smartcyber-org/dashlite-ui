import React, { ReactNode } from 'react';
import Link from 'next/link';
import Icon from '../icon/Icon';
import classNames from 'classnames';

// Define types for LinkItem props
export interface LinkItemProps {
  tag?: string;
  link: string;
  icon?: string;
  text?: string;
  children?: ReactNode;
  onClick?: React.MouseEventHandler;
}

export const LinkItem: React.FC<LinkItemProps> = ({
  tag,
  link,
  icon,
  text,
  children,
  ...props
}) => {
  const content = (
    <>
      {icon && <Icon name={icon} />}
      <span>{text || children}</span>
    </>
  );

  return (
    <li>
      {tag !== 'a' ? (
        <Link href={process.env.NEXT_PUBLIC_URL + link} {...props}>
          {content}
        </Link>
      ) : (
        <a
          href={process.env.NEXT_PUBLIC_URL + link}
          onClick={(ev) => ev.preventDefault()}
          {...props}
        >
          {content}
        </a>
      )}
    </li>
  );
};

// Define types for LinkList props
interface LinkListProps {
  opt?: boolean;
  className?: string;
  children?: ReactNode;
  click?: React.MouseEventHandler;
}

export const LinkList: React.FC<LinkListProps> = ({
  opt,
  className,
  children,
  click,
}) => {
  const listClasses = classNames({
    'link-list': !opt,
    'link-list-opt': opt,
    [`${className}`]: className,
  });

  return (
    <ul className={listClasses} onClick={click}>
      {children}
    </ul>
  );
};
