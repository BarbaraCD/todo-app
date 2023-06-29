import React, { useEffect, useState } from 'react'
import { Tasks, TasksProps } from './Tasks'
import { createTask, deleteTask, getTasks } from '../services/task.service'
import { TaskInput } from './TaskInput'
import { TaskButton } from './TaskButton'

export function Createtask() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [newTask, setNewTask] = useState<string>('')

  useEffect(() => {
    fetchTasks()
  }, [])

  async function fetchTasks() {
    const response: any = await getTasks()
    const fetchedTasks = response.data
    setTasks(fetchedTasks)
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

  const removeTask = async (id: number) => {
    await deleteTask(id)
    fetchTasks()
  }

  return (
    <div>
      <div className="flex">
        <TaskInput
          value={newTask}
          onChange={setNewTask}
          onKeyPress={handleKeyPress}
        />

        <TaskButton onClick={createNewTask} />
      </div>

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
        <p className="flex items-center justify-center text-xl text-gray-100">
          No tasks available, Create a new task.
        </p>
      )}
    </div>
  )
}
