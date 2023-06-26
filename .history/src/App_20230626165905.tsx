import { Createtask } from './components/Createtask'
import { Tasks } from './components/Tasks'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 font-bold text-3xl text-white p-4">To Do</p>
      </div>
      <Createtask />

      <Tasks />
    </>
  )
}
