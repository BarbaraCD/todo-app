import { FiTrash2 } from 'react-icons/fi'

export function Tasks() {
  return (
    <div className="flex m-6 rounded outline-none p-3 place-items-center justify-between hover:bg-aqua-100">
      <p className="ml-5 text-lg">task</p>
      <FiTrash2 className="mr-2 text-gray" />
    </div>
  )
}
