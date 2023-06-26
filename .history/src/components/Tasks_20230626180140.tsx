import { FiTrash2 } from 'react-icons/fi'

export function Tasks() {
  return (
    <div className="flex rounded outline-none p-3 place-items-center justify-between hover:bg-aqua-100 m-0">
      <p className="ml-10 text-lg">task</p>
      <FiTrash2 className="mr-2 text-gray hover:text-black" />
    </div>
  )
}
