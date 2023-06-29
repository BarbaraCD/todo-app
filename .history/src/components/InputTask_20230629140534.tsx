import React, { useEffect, useState } from 'react'
import { getTasks, createTask } from '../services/task.service'
import { TasksProps } from './Tasks'

export function InputTask() {
  const [setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState<string>('')

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const response: any = await getTasks()
    const fetchedTasks = response.data
  }

  async function createNewTask() {
    if (newTask.trim() !== '') {
      await createTask(newTask)
      fetchTasks()
      setNewTask('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      createNewTask()
    }
  }
  return (
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
  )
}
