import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/TodosSlice'

const rootReducer = combineReducers({
  todos: todosReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
