import "./App.css";
import React from "react";
import classNames from 'classnames'


const getKey = () => Math.random().toString(32).substring(2);

const Todo = () => {
  const [items, setItems] = React.useState([
    { key: getKey(), text: "Javascript", done: false },
    { key: getKey(), text: "React", done: false },
    { key: getKey(), text: "Get some good sleep", done: false },
  ]);

  const handleCheck = (checked) => {
    const newItems = items.map((item) => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="panel">
      <div className="panel-heading">React Todo</div>
      {items.map((item) => (
        <TodoItem key={item.key} item={item} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{items.length}items</div>
    </div>
  );
};

const TodoItem = ({ item, onCheck }) => {
  const handleChange = () => {
    onCheck(item);
  };

  return (
    <label className="panel-block">
      <input type="checkbox" checked={item.done} onChange={handleChange} />
      <span
        className={classNames({
          'has-text-grey-light': item.done // 真偽値
        })}
      >
        {item.text}
      </span>
    </label>
  );
};

const App = () => {
  return (
    <div className="container is-fluid">
      <Todo />
    </div>
  );
};

export default App;
