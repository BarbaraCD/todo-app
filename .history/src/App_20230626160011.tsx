import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-3xl text-white p-4">To Do</p>
      </div>
      <div className="flex">
        <input
          type="text"
          className="placeholder:text-sm flex-1  m-5 py-4 px-3 outline-none rounded focus-within:ring-2 ring-aqua-700 border border-gray text-lg"
          placeholder="Enter a task"
        />
        <button className=" bg-aqua-500 py-2 px-6 rounded mt-5 mb-5 mr-6 text-white text-lg">
          Create Task
        </button>
      </div>
    </>
  )
}
