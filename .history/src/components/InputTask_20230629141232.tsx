import React from 'react'

interface TaskButtonProps {
  onclick: () => void
}

export function InputTask() {
  return (
    <div className="flex">
      <input
        type="text"
        className="mb-0 ml-5 mr-5 mt-5 flex-1 rounded border border-gray-100 px-3 py-4 text-lg outline-none ring-aqua-700 placeholder:text-sm focus-within:ring-2"
        placeholder="Enter a task"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button
        onClick={createNewTask}
        className="mb-0 mr-5 mt-5 rounded bg-aqua-500 px-5 text-lg text-white"
      >
        Create Task
      </button>
    </div>
  )
}
