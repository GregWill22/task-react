import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSummit = (e) => {
    e.preventDefault();
    createTask({ title, description });

    setDescription("");
    settitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSummit}>
        <h1 className="text-2xl font-bold- text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
          autoFocus={true}
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white w-full">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
