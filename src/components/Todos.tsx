import React, {
  SFC,
  useContext,
  FormEvent,
  ChangeEvent,
  MouseEvent,
} from "react"
import { useObserver, useLocalStore } from "mobx-react-lite"

import { StoreContext, IRootStore } from "stores"
import Todo from "./Todo"

const Todos: SFC = () => {
  const {
    todosStore: { todos, add, remove, remaining },
  } = useContext(StoreContext) as IRootStore

  const localStore = useLocalStore(() => ({
    todo: "",
    handleChange: (e: ChangeEvent<HTMLInputElement>): void => {
      localStore.todo = e.currentTarget.value
    },
    handleSubmit: (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      add({ label: localStore.todo })
      localStore.todo = ""
    },
    handleRemove: (e: MouseEvent<HTMLButtonElement>): void => {
      remove({ id: e.currentTarget.name })
    },
  }))

  return useObserver(() => (
    <div className="todos">
      <form className="todos-form" onSubmit={localStore.handleSubmit}>
        <input
          type="text"
          value={localStore.todo}
          onChange={localStore.handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onChange={todo.toggle}
            onRemove={localStore.handleRemove}
          />
        ))}
      </ul>
      <p>Remaining todo: {remaining}</p>
      <style jsx>{`
        .todos {
          max-width: 400px;
          margin: auto;
        }

        .todos-form {
          margin-bottom: 2rem;
        }

        .todo-list {
          padding: 0;
          text-align: left;
          list-style-type: none;
        }
      `}</style>
    </div>
  ))
}

export default Todos
