import React from 'react'

interface TaskButtonProps {
  onclick: () => void
}

export function InputTask() {
  return (
    <button
      onClick={onClick}
      className="mb-0 mr-5 mt-5 rounded bg-aqua-500 px-5 text-lg text-white"
    >
      Create Task
    </button>
  )
}
