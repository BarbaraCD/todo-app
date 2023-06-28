import React, { useEffect, useState } from 'react'
import { Tasks, TasksProps } from './Tasks'
import { createTask, deleteTask, getTasks } from '../services/task.service'

export function Createtask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState<string>('')

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const response = await getTasks()
    const fetchedTasks = response.data.reverse() // Inverte a ordem das tarefas
    setTasks(fetchedTasks)
  }

  async function createNewTask() {
    await createTask(newTask)
    fetchTasks()
    setNewTask('')
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createNewTask()
    }
  }

  const removeTask = async (id: number) => {
    await deleteTask(id)
    fetchTasks()
  }

  return (
    <div>
      <div className="flex">
        <input
          type="text"
          className="mb-0 ml-5 mr-5 mt-5 flex-1 rounded border border-gray-100 px-3 py-4 text-lg outline-none ring-aqua-700 placeholder:text-sm focus-within:ring-2"
          placeholder="Enter a task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          onKeyPress={handleKeyPress}
        />

        <button
          onClick={createNewTask}
          className="mb-0 mr-5 mt-5 rounded bg-aqua-500 px-5 text-lg text-white"
        >
          Create Task
        </button>
      </div>

      {tasks.length > 0 &&
        tasks.map((task, index) => {
          const taskId = tasks.length - index // Define o ID com base na posição na lista invertida
          return (
            <Tasks
              key={task.id}
              id={taskId}
              title={task.title}
              handleDelete={() => {
                removeTask(task.id)
              }}
            />
          )
        })}
    </div>
  )
}
