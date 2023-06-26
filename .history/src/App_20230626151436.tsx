import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-4xl text-white p-3">To Do</p>
      </div>
      <input type="text" placeholder="Enter a task" />
      <button>Create Task</button>
    </>
  )
}
