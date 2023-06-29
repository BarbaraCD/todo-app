import React from 'react'

interface TaskInputProps {
  value: string
  onChange: (value: string) => void
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export function TaskInput({ value, onChange, onKeyPress }: TaskInputProps) {
  return (
    <input
      type="text"
      className="mb-0 ml-5 mr-5 mt-5 flex-1 rounded border border-gray-100 px-3 py-4 text-lg outline-none ring-aqua-700 placeholder:text-sm focus-within:ring-2"
      placeholder="Enter a task"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyPress={onKeyPress}
    />
  )
}
