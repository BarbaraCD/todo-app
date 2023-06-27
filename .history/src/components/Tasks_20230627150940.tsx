import { FiTrash2 } from 'react-icons/fi'

export type TasksProps = {
  id?: number
  title: string
  handleDelete?: () => void
}

export function Tasks({ title, handleDelete }: TasksProps) {
  return (
    <div className="ml-6 mr-6 mt-0 flex place-items-center justify-between rounded p-3 outline-none hover:bg-aqua-100">
      <div className="ml-6 rounded text-lg"> {title} </div>
      <button
        onClick={handleDelete}
        className="bg-transparent group mr-2 text-gray"
      >
        <span className="group-hover:hidden">
          {/* Ícone que será ocultado quando não houver hover */}
          <FiTrash2 />
        </span>
        <span className="group-hover:block">
          {/* Ícone que será mostrado apenas quando houver hover */}
          <FiTrash2 />
        </span>
      </button>
    </div>
  )
}
