import React from "react";
import { ReactSortable } from "react-sortablejs";
import SortableItem from "./components/sortableitem";
import Add from "./components/icons/add";
import ReactTooltip from "react-tooltip";
import Button from "./components/button";

export default class App extends React.PureComponent {
   state = {
      items: this.getConfig() ?? [
         {id: "1", title: "test", value: "test2"},
         {id: "2", title: "test2", value: "test3"}
      ]
   };

   getConfig() {
      try {
         return JSON.parse(localStorage.getItem('items'));
      } catch (error) {
         return false;
      }
   }

   setList = list => {
      list = list.map(e => ({
         title: e.title,
         value: e.value
      }));

      localStorage.setItem('items', JSON.stringify(list, null, 4));
      this.setState({items: list});
   }

   addNewEntry = () => {
      this.setList(this.state.items.concat([{title: "", value: ""}]));
   }

   onEdit = (index, type, value) => {
      const list = this.state.items;

      list[index][type] = value;

      this.setList(list);
   }

   copyPlan = () => {
      navigator.clipboard.writeText("!plan set " + JSON.stringify(this.state.items));
   }

   removeItem = index => {
      this.state.items.splice(index, 1);
      this.setList(this.state.items);
   }

   render() {
      return <>
         <h1 className="title">Mit diesem Tool kannst du einen Plan für den ShoXx bzw. Bounty92 bot erstellen.</h1>
         
         <Add data-tip="Neuer Eintrag" onClick={this.addNewEntry} />
         <ReactSortable className="scroller" list={this.state.items} setList={this.setList}>
            {this.state.items.map((item, index) => <SortableItem key={item.id} item={item} index={index} onEdit={this.onEdit} onRemove={this.removeItem} />)}
         </ReactSortable>

         <Button className="copyPlan" onClick={this.copyPlan}>Plan Kopieren</Button>

         <ReactTooltip effect="solid" place="top" />
      </>;
   }
}