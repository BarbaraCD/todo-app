import { FiTrash2 } from 'react-icons/fi'
import { TasksProps } from './Tasks'

export function deleteTask({ handleDelete }: TasksProps) {
  return (
    <button onClick={handleDelete} className="mr-2 text-gray-500">
      <FiTrash2 className="h-5 w-5 hover:text-black" />
    </button>
  )
}
