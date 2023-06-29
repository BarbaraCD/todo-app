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
      className="m-5 flex flex-col place-items-center rounded p-2 hover:bg-aqua-100 md:flex-row md:justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="ml-4 flex-1 rounded text-lg">
        {
          <span>
            {id}
            {')'}
          </span>
        }
        {
          <span className="overflow-wrap-break-words m-1 gap-2 whitespace-normal">
            {title}
          </span>
        }
      </div>
      {isHovered && (
        <button
          onClick={handleDelete}
          className="mr-2 text-gray-500 md:ml-auto"
        >
          <FiTrash2 className="h-5 w-5 hover:text-black" />
        </button>
      )}
    </div>
  )
}
