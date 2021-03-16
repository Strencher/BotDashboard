import React, { useState } from 'react';
import FormItem from './formitem';

export default function TextInput(props) {
   const [value, setValue] = useState(props.value);

   const onChange = ({target}) => {
      
      props.onChange(target.value);
      setValue(() => target.value);
   };

   return <FormItem title={props.name}>
      <input placeholder={props.name} className="textInput" type="text" onChange={onChange} value={value} />
   </FormItem>;
}