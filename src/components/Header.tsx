import React from "react";
import "../stylesheets/header.css";

interface HeaderProps {
  title: string;
  showBackButton: boolean;
  addHandler?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className="header">
      {props.showBackButton === true ?  <div onClick={props.addHandler} className="back-button">
        <img alt="back button" src={'/icons/arrow-left-circle-fill.svg'}  />
      </div> : ''}
      <span>{props.title}</span>
    </div>
  );
};
