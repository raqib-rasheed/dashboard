import { Checkbox, Col, Row } from "antd";
import React, { useState } from "react";

export default function Task() {
  const [checkedList, setCheckedList] = useState([]);

  const tasksArr = [
    "Set up a Followup reminder...",
    "Remind Customer for Payment",
    "Escalate P1 issues",
    "Remind Customer for Payment",
  ];

  const updateCheckedList = (status: any, id: any) => {
    if (status) {
      setCheckedList([...checkedList, id] as any);
    } else {
      setCheckedList(checkedList.filter((_id) => _id !== id));
    }
  };

  return (
    <>
      <div>
        <br />
        <span> undone tasks: {tasksArr.length - checkedList.length}</span>
      </div>
      <hr />
      <ul id="todo-list">
        {tasksArr.map((todo, index) => (
          <Todo
            key={index}
            id={index}
            todo={todo}
            onToggle={(status: any, id: any) => updateCheckedList(status, id)}
          />
        ))}
      </ul>
    </>
  );
}

const Todo = (props: any) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Row gutter={20} className={`todo-item ${isChecked ? "is-done" : ""}`}>
      {props.todo}
      <Col>
        <Checkbox
          style={{ marginLeft: ".5rem" }}
          className="todo-checkbox"
          type="checkbox"
          onChange={(e) => {
            setChecked(e.target.checked);
            props.onToggle(e.target.checked, props.id);
          }}
        />
      </Col>
    </Row>
  );
};
