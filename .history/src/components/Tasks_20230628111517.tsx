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
      className="m-4 flex place-items-center justify-between rounded p-2 hover:bg-aqua-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-0 ml-5 mt-0 rounded text-lg">
        {
          <span>
            {id}
            {')'}
          </span>
        }
        {<span className="m-1">{title}</span>}
      </div>
      {isHovered && (
        <button onClick={handleDelete} className="mr-2 text-gray">
          <FiTrash2 className="h-5 w-5 hover:text-black" />
        </button>
      )}
    </div>
  )
}
