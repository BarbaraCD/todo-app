import { Createtask } from './components/Createtask'
import { Tasks } from './components/Tasks'
import './styles/global.css'

export function App() {
  return (
    <>
      <div className="flex bg-aqua-700">
        <p className="ml-3 p-4 text-3xl font-bold text-white">To Do</p>
      </div>

      <Createtask />

      <Tasks title="Estudar" />
      <Tasks title="Comer" />
      <Tasks title="Dormir" />
    </>
  )
}
