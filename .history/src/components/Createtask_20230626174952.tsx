export function Createtask() {
  return (
    <div className="flex">
      <input
        type="text"
        className="placeholder:text-sm flex-1 m-6 py-3 outline-none rounded focus-within:ring-2 ring-aqua-700 border border-gray text-lg"
        placeholder="Enter a task"
      />
      <button className=" bg-aqua-500 p-3 rounded mt-6 mb-6 mr-6 text-white text-lg">
        Create Task
      </button>
    </div>
  )
}
