import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-3xl text-white p-3">To Do</p>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a task"
          className=" flex-1  m-4 py-4 px-3 outline-none rounded focus-within:ring-2 ring-aqua-700 border border-gray"
        />
        <button className=" bg-aqua-500 py-4 px-3 rounded m-4 text-white">
          Create Task
        </button>
      </div>
    </>
  )
}
