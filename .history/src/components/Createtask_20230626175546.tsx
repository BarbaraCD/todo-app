export function Createtask() {
  return (
    <div className="flex p-4 m-4 justify-between">
      <input
        type="text"
        className="placeholder:text-sm flex-1 outline-none rounded focus-within:ring-2 ring-aqua-700 border border-gray text-lg"
        placeholder="Enter a task"
      />
      <button className=" bg-aqua-500 rounded-lg text-white text-lg">
        Create Task
      </button>
    </div>
  )
}
