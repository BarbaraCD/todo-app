import { FiTrash2 } from 'react-icons/fi'

type TasksProps = {
  title: string
}

export function Tasks({ title }: TasksProps) {
  return (
    <div className="ml-6 mr-6 mt-0 flex place-items-center justify-between rounded p-3 outline-none hover:bg-aqua-100">
      <div className="ml-6 rounded text-lg">task</div>
      <button className="mr-2 text-gray hover:text-black">
        <FiTrash2 />
      </button>
    </div>
  )
}
