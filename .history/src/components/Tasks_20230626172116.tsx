import { FiTrash2 } from 'react-icons/fi'

export function Tasks() {
  return (
    <div className="flex m-2 rounded outline-none p-4 place-items-center justify-between hover:bg-aqua-100">
      <p className="ml-10 text-lg">task</p>
      <FiTrash2 className="mr-6" />
    </div>
  )
}
