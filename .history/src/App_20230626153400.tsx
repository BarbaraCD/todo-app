import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-3xl text-white p-3">To Do</p>
      </div>
      <input
        type="text"
        placeholder="Enter a task"
        className="flex flex-1 m-3 w-screen py-4 px-3 outline-none rounded focus-within:ring-2 ring-aqua-500 border border-gray"
      />
      <button>Create Task</button>
    </>
  )
}
