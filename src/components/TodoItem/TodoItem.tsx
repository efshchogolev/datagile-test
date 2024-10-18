import { useAppDispatch } from '@/hooks/redux'
import { deleteTodo, toggleTodo } from '@/store/slices/TodosSlice'
import Icon from '../Icon/Icon'
import s from './TodoItem.module.scss'
import { ItodoItemProps } from '@/@types'

const TodoItem = (props: ItodoItemProps) => {
  const { id, itemText, completed } = props

  const handleToggleTodo = () => {
    dispatch(toggleTodo({ id }))
  }
  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id }))
  }

  const dispatch = useAppDispatch()
  return (
    <li className={s.listItem}>
      <label className={s.itemLabel}>
        <input
          type="checkbox"
          checked={completed}
          className={s.checkbox}
          name={id}
          id={id}
          onChange={handleToggleTodo}
        ></input>
        <span className={s.itemText}>{itemText}</span>
      </label>
      <button className={s.deleteButton} onClick={handleDeleteTodo}>
        <Icon
          name="delete"
          width={'80%'}
          height={'80%'}
          className={s.deleteIcon}
        />
      </button>
    </li>
  )
}

export default TodoItem
