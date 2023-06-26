import { FiTrash2 } from 'react-icons/fi'

export function Tasks() {
  return (
    <div className="flex rounded outline-none p-3 place-items-center justify-between hover:bg-aqua-100 mt-0 mr-6 ml-6">
      <p className="ml-8 rounded text-lg">task</p>
      <FiTrash2 className="mr-2 text-gray hover:text-black" />
    </div>
  )
}
