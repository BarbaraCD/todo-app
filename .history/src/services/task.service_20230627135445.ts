import { TasksProps } from '../components/Tasks'
import { api } from './ApiConfig'

// get
export async function getTasks(): Promise<TasksProps[]> {
  return api.get('/tasks')
}

// post
export async function createTask(title: string) {
  return api.post('/tasks', {
    title,
  })
}

// delete
export async function deleteTask(id: number) {
  return api.delete(`/tasks/${id}`)
}
