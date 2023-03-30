import React, { useState } from "react"
import "../dist/output.css"
import { Header } from "./components/Header"
import './input.css'

import { v4 as uuid } from "uuid"
import { Task } from "./components/Task"
import { VoidList } from "./components/VoidList"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isCompleted: false
    }
  ])

  const [newTask, setNewTask] = useState('')
  function handleNewTask(event) {
    event.preventDefault()

    setTasks([
      ...tasks,
      {
        id: uuid(),
        title: newTask,
        isCompleted: false
      }
    ])

    setNewTask('')
  }

  function handleNewTaskChange({ target }) {
    setNewTask(target.value)
  }

  function deleteTask(id) {
    const taskList = tasks.filter(tasks => tasks.id !== id)

    setTasks(taskList)
  }

  function handleToggleTaskComplet(id) {
    const taskList = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }

      return task
    })

    setTasks(taskList)
  }

  const completeds = tasks.filter(task => {
      return task.isCompleted !== false
    }

  )

  return (
    <div className="w-screen h-screen">
      <Header />

      <form
        className="w-4/6 m-auto py-3 flex -mt-8 mb-6 space-x-2"
        onSubmit={handleNewTask}
      >
        <input
          required
          type="text"
          value={newTask}
          onChange={handleNewTaskChange}
          className="w-4/5 bg-box text-sm outline-0 py-2 px-3 text-white placeholder:text-gray-600 rounded-md placeholder:text-sm"
          placeholder="Add a task..."
        />
        <button
          className="p-4 flex gap-2 items-center rounded-md bg-blue text-white hover:bg-sky-600 transition-colors">
          <p>Create</p>
          <div className="h-5 w-5 border rounded-full flex items-center justify-center">+</div>
        </button>
      </form>

      {tasks.length > 0 &&
        <header className="w-4/6 m-auto flex justify-around items-center mb-2">
          <div className='text-base space-x-1'>
            <span className='text-blue'>Tarefas Criadas</span>
            <span className='p-1 text-white bg-box rounded-md'>{tasks.length}</span>
          </div>

          <div className='text-base space-x-1'>
            <span className='text-blue'>Concluídas</span>
            <span className='p-1 text-white bg-box rounded-md'>{completeds.length} de {tasks.length}</span>
          </div>
        </header>
      }

      {tasks.map(task => {
        if (tasks.length > 0) {
          return (
            <Task
              handleToggleTaskComplet={handleToggleTaskComplet}
              id={task.id}
              isCompleted={task.isCompleted}
              onDeleteTask={deleteTask}
              key={task.id}
              title={task.title}
              task={task}
            />
          )
        }
      })}

      <div>
        {tasks.length === 0 &&
          <VoidList />
        }
      </div>
    </div>
  )
}

export default App
