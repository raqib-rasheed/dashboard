import React, { useState } from "react";

export default function Notes() {
  const [todoName, setTodoName] = useState("");
  const [todoArr, setTodo] = useState<string[]>([
    "Checking the website for customer one, www.ticycles.com",
    "Inspirational Books list - Mukesh Bansal No Limits, Agassi... ",
    "Summer in India for foodies is synonymous with the mango season...",
  ]);
  const [checkedList, setCheckedList] = useState([]);

  const createTodo = (name: string) => {
    if (name) {
      setTodo([...todoArr, name]);
      setTodoName("");
    }
  };

  const deleteTodo = (index: number) => {
    setTodo(todoArr.filter((todo) => todoArr.indexOf(todo) !== index));
  };

  const updateCheckedList = (status: any, id: any) => {
    if (status) {
      setCheckedList([...checkedList, id] as any);
    } else {
      setCheckedList(checkedList.filter((_id) => _id !== id));
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createTodo(todoName);
        }}
      >
        <input
          type="text"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
          placeholder="A beautifull name"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            createTodo(todoName);
          }}
        >
          Add todo
        </button>
      </form>
      <hr />
      <ul id="todo-list">
        {todoArr.map((todo, index) => (
          <Todo
            key={index}
            id={index}
            todo={todo}
            onToggle={(status: boolean, id: number) =>
              updateCheckedList(status, id)
            }
            delete={(id: number) => {
              deleteTodo(id);
            }}
          />
        ))}
      </ul>
    </>
  );
}

const Todo = (props: any) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <li className={`todo-item ${isChecked ? "is-done" : ""}`}>
      {props.todo}
      <button className="todo-remove" onClick={() => props.delete(props.id)}>
        remove
      </button>
    </li>
  );
};
