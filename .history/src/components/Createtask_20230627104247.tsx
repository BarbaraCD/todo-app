import { useState } from 'react'
import { Tasks, TasksProps } from './Tasks'
import { getTasks } from '../services/task.service'

export function Createtask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])

  return (
    <div>
      <div className="m-0 flex">
        <input
          type="text"
          className="m-5 flex-1 rounded border border-gray px-3 py-4 text-lg outline-none ring-aqua-700 placeholder:text-sm focus-within:ring-2"
          placeholder="Enter a task"
        />
        {tasks.length > 0 &&
          tasks.forEach((task) => {
            ;<Task tittle={task.title} />
          })}
        <button
          onClick={async () => {
            setTasks(await getTasks())
          }}
          className="mb-5 mr-5 mt-5 rounded bg-aqua-500 px-5 text-lg text-white"
        >
          Create Task
        </button>
      </div>

      <Tasks title="Estudar" />
      <Tasks title="Comer" />
      <Tasks title="Dormir" />
    </div>
  )
}
