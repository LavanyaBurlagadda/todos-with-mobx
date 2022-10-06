import React, { FunctionComponent, ReactNode } from "react";
// import CSS from "csstype";

type CardProps = {
  children: ReactNode;
  title: string;
  para: string;
};

const Dummy: FunctionComponent<CardProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.para}
      {props.children}
    </div>
  );
};

export default Dummy;

// export const h1Styles: CSS.Properties = {
//   backgroundColor: "transparent",
//   position: "absolute",
//   right: 0,
//   padding: "16px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };
