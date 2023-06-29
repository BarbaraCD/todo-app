import { FiTrash2 } from "react-icons/fi";

export function deleteTask() {
  return (
    <button onClick={handleDelete} className="mr-2 text-gray-500">
      <FiTrash2 className="h-5 w-5 hover:text-black" />
    </button>
  )
}
