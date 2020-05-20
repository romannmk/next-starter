import React, { SFC, ChangeEvent, MouseEvent } from "react"

type Props = {
  id: string
  label: string
  completed: boolean
  onChange: (e: ChangeEvent<HTMLElement>) => void
  onRemove: (e: MouseEvent<HTMLButtonElement>) => void
}

const Todo: SFC<Props> = ({
  id,
  label,
  completed,
  onChange,
  onRemove,
}: Props) => (
  <li className="todo">
    <input
      className="checkbox"
      type="checkbox"
      checked={completed}
      onChange={onChange}
    />
    {label}
    <button name={id} className="button" onClick={onRemove}>
      x
    </button>
    <style jsx>{`
      .todo {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .checkbox {
        margin-right: 0.5rem;
      }

      .button {
        padding: 0;
        border: 0;
        background: transparent;
        margin-left: auto;
        outline: none;
      }
    `}</style>
  </li>
)

export default Todo
