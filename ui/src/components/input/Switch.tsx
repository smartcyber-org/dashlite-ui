import React, { useState, ChangeEventHandler } from "react";

// Define the props for the InputSwitch component
interface InputSwitchProps {
  label: string;
  id: string;
  checked?: boolean; // Optional checked prop to control the initial state
}

const InputSwitch: React.FC<InputSwitchProps> = ({ label, id, checked = false }) => {
  const [inputCheck, setCheck] = useState(checked);

  // Event handler for the checkbox click event
  const handleChange: ChangeEventHandler<HTMLInputElement> = () => {
    setCheck(!inputCheck);
  };

  return (
    <React.Fragment>
      <input
        type="checkbox"
        className="custom-control-input"
        checked={inputCheck} // Use checked instead of defaultChecked for controlled state
        onChange={handleChange}
        id={id}
      />
      <label className="custom-control-label" htmlFor={id}>
        {label}
      </label>
    </React.Fragment>
  );
};

export default InputSwitch;
