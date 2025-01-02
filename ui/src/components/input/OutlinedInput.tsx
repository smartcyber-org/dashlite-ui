import React, { useState, FocusEventHandler } from 'react';
import Icon from '../icon/Icon';

// Define allowed types for the size prop
type InputSize = 'sm' | 'lg' | 'xl' | undefined;

interface OutlinedInputProps {
  label: string;
  size?: InputSize;
  id: string;
  icon?: string; // Assuming the icon name is a string (e.g., 'search', 'user', etc.)
}

const OutlinedInput: React.FC<OutlinedInputProps> = ({
  label,
  size,
  id,
  icon,
}) => {
  const [focus, setFocus] = useState(false);

  // Handle focus events
  const handleFocus: FocusEventHandler<HTMLInputElement> = () => setFocus(true);
  const handleBlur: FocusEventHandler<HTMLInputElement> = () => setFocus(false);

  return (
    <div className={`form-control-wrap ${focus ? 'focused' : ''}`}>
      {icon && (
        <div className="form-icon form-icon-right xl">
          <Icon name={icon}></Icon>
        </div>
      )}
      <input
        type="text"
        className={`form-control-outlined form-control ${
          size ? `form-control-${size}` : ''
        }`}
        id={id}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label className="form-label-outlined" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default OutlinedInput;
