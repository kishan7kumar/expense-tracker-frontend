import React from "react";
import "../stylesheets/button.css";

interface ButtonProps {
  title: string;
  addHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isButtonDisable?: boolean
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <button disabled = {props.isButtonDisable} className="primary-button" onClick={props.addHandler}>{props.title}</button>;
};
