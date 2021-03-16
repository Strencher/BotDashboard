import React from "react";

export default function FormItem({title, children}) {
   return <div className="formItem">
      <h5 className="formTitle">{title}</h5>
      <div className="contents">{children}</div>
   </div>;
}