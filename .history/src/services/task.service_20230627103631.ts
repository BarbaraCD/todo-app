import { TasksProps } from '../components/Tasks'
import { api } from './ApiConfig'

// get
export async function getTasks(): Promise<TasksProps[]> {
  return api.get('/tasks').then((resposta) => {
    return resposta.data
  })
}

// post

// delete

// update
