import React, { ReactNode } from "react";
import { UncontrolledTooltip } from "reactstrap";
import Icon from "../icon/Icon";

// Available direction values for the tooltip
type TooltipDirection = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipComponentProps {
  iconClass?: string;
  icon: string;
  id: string;
  direction?: TooltipDirection;
  text: string;
  containerClassName?: string;
  tag?: React.ElementType;
  children?: ReactNode;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  iconClass,
  icon,
  id,
  direction = 'top', // default direction is top
  text,
  containerClassName,
  tag: Tag = 'span', // default tag is 'span' if no tag is provided
  ...props
}) => {
  return (
    <React.Fragment>
      {Tag ? (
        <Tag className={containerClassName} id={id}>
          <Icon className={`${iconClass ? iconClass : ""}`} name={icon} />
        </Tag>
      ) : (
        <Icon className={`${iconClass ? iconClass : ""}`} name={icon} id={id} />
      )}
      <UncontrolledTooltip autohide={false} placement={direction} target={id} {...props}>
        {text}
      </UncontrolledTooltip>
    </React.Fragment>
  );
};

export default TooltipComponent;
