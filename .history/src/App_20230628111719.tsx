import { Createtask } from './components/Createtask'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="mb-0 flex bg-aqua-700">
        <p className="ml-2 p-4 text-3xl font-bold text-white">To Do</p>
      </div>
      <Createtask />
    </>
  )
}
