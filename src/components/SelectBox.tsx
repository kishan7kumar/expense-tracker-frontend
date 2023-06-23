import React from "react";
import "../stylesheets/selectBox.css";

interface SelectBoxProps {
  reference: React.RefObject<HTMLSelectElement>;
  options: Array<string>;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const SelectBox: React.FC<SelectBoxProps> = (props: SelectBoxProps) => {
  return (
    <select onChange={props.onChange} className="select-dropdown" ref={props.reference}>
      <option value="default" disabled selected>
        Select category
      </option>
      {props.options.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  );
};
