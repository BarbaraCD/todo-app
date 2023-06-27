import { FiTrash2 } from 'react-icons/fi'

export type TasksProps = {
  id?: number
  title: string
  handleDelete?: () => void
}

export function Tasks({ title, handleDelete }: TasksProps) {
  return (
    <div className="place-items-centerrounded ml-6 mr-6 mt-0 flex p-3 outline-none hover:bg-aqua-100">
      <div className="ml-6 justify-between rounded text-lg">
        {title}
        <button
          onClick={handleDelete}
          className="mr-2 text-gray hover:text-black"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  )
}
