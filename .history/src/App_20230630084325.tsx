import { Createtask } from './components/Createtask'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flex w-full min-w-[110px] bg-aqua-700 sm:w-full">
        <p className="ml-2 p-4 text-4xl font-bold text-white">To Do</p>
      </div>
      <Createtask />
    </>
  )
}
