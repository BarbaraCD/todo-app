import './styles/global.css'
export function App() {
  return (
    <>
      <div className="flex bg-green-600">
        <p className="ml-3 font-bold text-5xl">To Do</p>
      </div>
      <label htmlFor="">Enter a task</label>
      <button>Create Task</button>
    </>
  )
}
