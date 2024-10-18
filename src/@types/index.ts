export interface ITodo {
  id: string
  text: string
  completed: boolean
}

export interface ItodoItemProps {
  itemText: string
  completed: boolean
  id: string
}

export type IconProps = {
  name: 'delete' | 'add'
  className?: string
  width: number | string
  height: number | string
}

export interface TodoState {
  list: ITodo[]
  filter: string
  sorting: string
}

export type addTodoPayload = {
  text: string
  id: string
}
