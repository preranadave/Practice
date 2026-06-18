import React from "react";

const Todo = () => {
  const TodoList = [
    {
      id: 1,
      text: "Learn jsx",
    },
    {
      id: 1,
      text: "Learn jsx",
    },
    {
      id: 1,
      text: "Learn jsx",
    },
  ];
  return (
    <div>
      <ul>
        {TodoList.map((e) => (
          <li>{e.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
