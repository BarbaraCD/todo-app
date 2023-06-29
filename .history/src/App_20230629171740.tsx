import { Createtask } from './components/Createtask'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flex w-full bg-aqua-700 sm:w-auto">
        <p className="ml-2 w-full p-4 text-4xl font-bold text-white sm:w-auto">
          To Do
        </p>
      </div>
      <Createtask />
    </>
  )
}
