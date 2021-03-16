import React from "react";

export default function Button({children, onClick = () => {}, color, className}) {
   return <button onClick={onClick} className={
      (color ? "buttonNormal " + color + " " : "buttonNormal ") + (className ?? "")
   }>
      {children}
   </button>;
};