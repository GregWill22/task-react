import TaskList from "./components/TaskList";
import TaskFrom from "./components/TaskForm";
import { tasks as data } from "./data/Tasks";
import { useState, useEffect } from "react";

function App() {
  
  return (
    <main className="bg-zinc-900 h-screen">
      <div className=" bg-zinc-900 h-auto">
        <TaskFrom/>
      <TaskList />
      </div>
    </main>
  );
}
export default App;
