import { Createtask } from './components/Createtask'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-2 min-w-[95%] p-4 text-4xl font-bold text-white">
          To Do
        </p>
      </div>
      <Createtask />
    </>
  )
}
