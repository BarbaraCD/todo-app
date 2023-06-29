import { api } from './ApiConfig'

// get
export async function getTasks() {
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
  return await api.delete(`/tasks/${id}`)
}
