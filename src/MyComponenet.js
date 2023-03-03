import React from "react";

export const MyComponent = ({ name, options }) => {
  console.log("Options : ", options);
  const { style, className, icon, status } = options;
  return <div style={style}>{name}</div>;
};
