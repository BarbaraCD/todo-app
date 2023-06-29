import { useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'

export type TasksProps = {
  id: number
  title: string
  handleDelete?: () => void
}

export function Tasks({ id, title, handleDelete }: TasksProps) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="m-5 flex place-items-center justify-between rounded p-2 hover:bg-aqua-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="ml-4 flex-1 rounded text-lg sm:w-1/2">
        {
          <span>
            {id}
            {')'}
          </span>
        }
        {
          <span className="m-1 gap-2 whitespace-normal break-words">
            {title}
          </span>
        }
      </div>
      {isHovered && (
        <button onClick={handleDelete} className="mr-2 text-gray-500">
          <FiTrash2 className="h-5 w-5 hover:text-black" />
        </button>
      )}
    </div>
  )
}
