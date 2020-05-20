import { types, Instance } from "mobx-state-tree"

export const Todo = types
  .model({
    id: types.identifier,
    label: types.optional(types.string, ""),
    completed: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const toggle = (): void => {
      self.completed = !self.completed
    }

    return { toggle }
  })

export const Todos = types
  .model({
    todos: types.array(Todo),
  })
  .actions((self) => {
    const add = ({ label }: { label: string }): void => {
      self.todos.unshift({
        id: String(new Date().valueOf()),
        label,
        completed: false,
      })
    }

    const remove = ({ id }: { id: string }): void => {
      const todo = self.todos.find((t) => String(id) === String(t.id))

      if (todo) self.todos.splice(self.todos.indexOf(todo), 1)
    }

    return { add, remove }
  })
  .views((self) => ({
    get remaining(): number {
      return self.todos.filter((t) => !t.completed).length
    },
  }))

export type ITodo = Instance<typeof Todo>
export type ITodos = Instance<typeof Todos>
