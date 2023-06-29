import { useState } from 'react'

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
      <div className="ml-4 rounded text-lg">
        {
          <span>
            {id}
            {')'}
          </span>
        }
        {<span className="m-1">{title}</span>}
      </div>
      {isHovered && <DeleteTask />}
    </div>
  )
}
