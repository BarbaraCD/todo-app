import { useEffect, useState } from 'react'
import { Tasks, TasksProps } from './Tasks'
import { createTask, getTasks } from '../services/task.service'

export function Createtask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState<string>('')

  useEffect(() => {
    getTasks().then((response: any) => {
      setTasks(response.data)
    })
  }, [])

  async function createNewTask() {
    createTask(newTask)
    getTasks().then
  }

  return (
    <div>
      <div className="m-0 flex">
        <input
          type="text"
          className="m-5 flex-1 rounded border border-gray px-3 py-4 text-lg outline-none ring-aqua-700 placeholder:text-sm focus-within:ring-2"
          placeholder="Enter a task"
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button
          onClick={() => createTask(newTask)}
          className="mb-5 mr-5 mt-5 rounded bg-aqua-500 px-5 text-lg text-white"
        >
          Create Task
        </button>
      </div>

      {tasks.length > 0 &&
        tasks.map((task, key) => {
          return <Tasks key={key} title={task.title} />
        })}
    </div>
  )
}
