interface TaskButtonProps {
  onClick: () => void
}

export function TaskButton({ onClick }: TaskButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mb-0 mr-5 mt-5 rounded bg-aqua-500 px-5 text-lg text-white"
    >
      Create Task
    </button>
  )
}
