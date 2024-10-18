import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import TodoItem from '../TodoItem/TodoItem'
import s from './List.module.scss'
import { ITodo } from '../../@types'

const List = () => {
  const todos = useAppSelector((state) => state.todos.list)
  const filter = useAppSelector((state) => state.todos.filter)
  const sorting = useAppSelector((state) => state.todos.sorting)

  const [editedTodos, setEditedTodos] = useState<ITodo[]>(todos)

  const handleSortTodos = (todos: ITodo[], sorting: string) => {
    if (sorting === 'name') {
      return [...todos].sort((a, b) => a.text.localeCompare(b.text))
    }
    return [...todos].sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? 1 : -1,
    )
  }

  useEffect(() => {
    const handleEditTodoList = (filter: string, sorting: string) => {
      if (filter === 'active') {
        setEditedTodos(
          handleSortTodos(
            todos.filter((todo) => !todo.completed),
            sorting,
          ),
        )
      } else if (filter === 'completed') {
        setEditedTodos(
          handleSortTodos(
            todos.filter((todo) => todo.completed),
            sorting,
          ),
        )
      } else {
        setEditedTodos(handleSortTodos(todos, sorting))
      }
    }
    handleEditTodoList(filter, sorting)
  }, [sorting, filter, todos])

  return (
    <ul className={s.list}>
      {editedTodos.map((todo) => (
        <TodoItem
          completed={todo.completed}
          id={todo.id}
          itemText={todo.text}
          key={todo.id}
        />
      ))}
    </ul>
  )
}

export default List
