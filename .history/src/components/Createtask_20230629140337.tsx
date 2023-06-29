import { useState } from 'react'
import { Tasks, TasksProps } from './Tasks'
import { deleteTask, getTasks } from '../services/task.service'
import { InputTask } from './InputTask'

export function Createtask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])

  async function fetchTasks() {
    const response: any = await getTasks()
    const fetchedTasks = response.data
    setTasks(fetchedTasks)
  }

  const removeTask = async (id: number) => {
    await deleteTask(id)
    fetchTasks()
  }

  return (
    <div>
      <InputTask />
      {tasks.length > 0 ? (
        tasks
          .slice()
          .reverse()
          .map((task, index) => (
            <Tasks
              key={task.id}
              id={index + 1}
              title={task.title}
              handleDelete={() => removeTask(task.id)}
            />
          ))
      ) : (
        <p className="m-5 flex items-center justify-center p-5 text-xl text-gray-100">
          No tasks available, Create a new task.
        </p>
      )}
    </div>
  )
}
