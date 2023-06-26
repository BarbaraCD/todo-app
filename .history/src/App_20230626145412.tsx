import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-4xl text-white p-3">To Do</p>
      </div>
      <label htmlFor="">Enter a task</label>
      <button>Create Task</button>
    </>
  )
}
