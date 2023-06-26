import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-4xl text-white p-3">To Do</p>
      </div>
      <input
        type="text"
        placeholder="Enter a task"
        className="py-4 px-3 rounded"
      />
      <button>Create Task</button>
    </>
  )
}
