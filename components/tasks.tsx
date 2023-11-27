"use client";

import { useState } from "react";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e: Event) => {
    e.preventDefault();
    if (task.length !== 0) {
      setTasks([task, ...tasks]);
      setTask("");
    } else {
      console.log("мааааалооооо");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <main className="m-auto max-w-4xl w-full mt-7">
      <form
        onSubmit={handleAddTask}
        className="flex flex-col rounded-2xl bg-white shadow-md shadow-yellow"
      >
        <input
          placeholder="Чем займемся сегодня?"
          className="lowercase p-7 rounded-t-2xl outline-none text-dark"
          type="text"
          value={"" || task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="lowercase text-white rounded-b-2xl py-2 bg-gradient-to-r from-pink to-yellow"
        >
          Сохранить
        </button>
      </form>
      <h1 className="text-center text-3xl text-dark mt-8 select-none">
        Список дел
      </h1>
      <ul className="list-none">
        {tasks.length !== 0 ? (
          tasks?.map((task, index) => (
            <li
              key={index}
              className="mt-5 flex flex-row justify-between gap-4 p-6 rounded-xl bg-white hover:border hover:border-yellow select-none"
            >
              <p className="text-dark">{task}</p>
              <button
                type="button"
                className="lowercase w-20 lg:w-44 bg-pink text-white rounded-md py-2 hover:bg-yellow"
                onClick={() => handleDeleteTask(index)}
              >
                Удалить
              </button>
            </li>
          ))
        ) : (
          <p className="text-center text-pink mt-2">планов пока нет...</p>
        )}
      </ul>
    </main>
  );
}
