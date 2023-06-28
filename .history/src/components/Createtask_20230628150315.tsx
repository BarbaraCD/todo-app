import React, { useEffect, useState } from 'react'

import { Tasks, TasksProps } from './Tasks'
import { createTask, deleteTask, getTasks } from '../services/task.service'

export function Createtask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState<string>('')

  useEffect(() => {
    getTasks().then((response: any) => {
      setTasks(response.data)
    })
  }, [])

  async function createNewTask() {
    await createTask(newTask)
    getTasks().then((response: any) => {
      setTasks(response.data)
    })
    setNewTask('')
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createNewTask()
    }
  }

  const removeTasks = async (id: number) => {
    await deleteTask(id)
    getTasks().then((response: any) => {
      setTasks(response.data)
    })
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
        tasks.map((task, key) => {
          return (
            <Tasks
              key={key}
              id={task.id}
              title={task.title}
              handleDelete={() => {
                removeTasks(Number(task.id))
              }}
            />
          )
        })}
    </div>
  )
}
