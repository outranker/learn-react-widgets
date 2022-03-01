import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
const items = [
  {
    title: "what is r?",
    content: "sfsfs",
  },
  {
    title: "sdfsdf r?",
    content: "ghufuiewf wegfysdf gsdfasdf fwefas fa dfd s",
  },
  {
    title: "hasdf  g asfd f asdg  gqer g?",
    content: "asgasjf a sgwe gq wrg fsdafgag qwegasdf asdg gsd",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui center aligned container">
      {/* <Search /> */}
      <Dropdown selected={selected}
        onSelectedChange={setSelected}
        options={options} />
    </div>
  );
};

export default App;
