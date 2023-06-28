import { Createtask } from './components/Createtask'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-2 p-5 text-3xl font-bold text-white">To Do</p>
      </div>
      <Createtask />
    </>
  )
}
