import { FiTrash2 } from 'react-icons/fi'

export function Tasks() {
  return (
    <div className="ml-6 mr-6 mt-0 flex place-items-center justify-between rounded p-3 outline-none hover:bg-aqua-100">
      <p className="ml-6 rounded text-lg">task</p>
      <FiTrash2 className="mr-2 text-gray hover:text-black" />
    </div>
  )
}
