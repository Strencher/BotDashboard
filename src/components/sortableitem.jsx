import Trash from "./icons/trash";
import Drag from "./icons/drag";
import React from "react";
import TextInput from './textinput';
import { debounce } from 'lodash';

export default function SortableItem({item, index, onEdit, onRemove}) {
   return <div key={item.id} className="planItem">
      <Trash data-tip="Löschen" className="closeIcon" onClick={debounce(() => onRemove(index), 100)} />
      <Drag className="dragIcon" />
      <TextInput key="title" name="Titel" value={item.title} onChange={value => onEdit(index, "title", value)} />
      <TextInput key="value" name="Beschreibung" value={item.value} onChange={value => onEdit(index, "value", value)} />
   </div>;
}