export function Createtask() {
  return (
    <div className="flex">
      <input
        type="text"
        className="placeholder:text-sm flex-1  m-2 py-4 px-3 outline-none rounded focus-within:ring-2 ring-aqua-700 border border-gray text-lg"
        placeholder="Enter a task"
      />
      <button className=" bg-aqua-500 px-6 rounded mt-5 mb-5 mr-6 text-white text-lg">
        Create Task
      </button>
    </div>
  )
}
