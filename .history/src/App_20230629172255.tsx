import { Createtask } from './components/Createtask'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flexmin-w-[95%] w-full bg-aqua-700">
        <p className="ml-2 p-4 text-4xl font-bold text-white">To Do</p>
      </div>
      <Createtask />
    </>
  )
}
