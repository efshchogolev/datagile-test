import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addTodoPayload, TodoState } from '../../@types'

const initialState: TodoState = {
  list: [
    {
      completed: true,
      id: new Date().toISOString() + 1,
      text: 'Купить молока',
    },
    {
      completed: true,
      id: new Date().toISOString() + 2,
      text: 'Погулять с собакой',
    },
    {
      completed: false,
      id: new Date().toISOString(),
      text: 'Выспаться',
    },
  ],
  filter: 'all',
  sorting: 'name',
}

const todoSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<addTodoPayload>) {
      state.list.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodo(state, action: PayloadAction<{ id: string }>) {
      const toggledTodo = state.list.find(
        (todo) => todo.id === action.payload.id,
      )
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed
      }
    },
    setFilter(state, action: PayloadAction<{ filter: string }>) {
      state.filter = action.payload.filter
    },
    setSorting(state, action: PayloadAction<{ sorting: string }>) {
      state.sorting = action.payload.sorting
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo, setFilter, setSorting } =
  todoSlice.actions
export default todoSlice.reducer
