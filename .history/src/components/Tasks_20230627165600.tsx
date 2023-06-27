import { FiTrash2 } from 'react-icons/fi'

export type TasksProps = {
  id?: number
  title: string
  handleDelete?: () => void
}

export function Tasks({ title, handleDelete }: TasksProps) {
  return (
    <div className="relative ml-6 mr-6 mt-0 flex place-items-center justify-between rounded p-3 outline-none hover:bg-aqua-100">
      <div className="ml-6 rounded text-lg"> {title} </div>
      <button
        onClick={handleDelete}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <FiTrash2 className="h-5 w-5 hover:text-black" />
      </button>
    </div>
  )
}
