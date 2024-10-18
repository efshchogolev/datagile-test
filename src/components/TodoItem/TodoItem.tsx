import Icon from '../Icon/Icon'
import s from './TodoItem.module.scss'

const TodoItem = () => {
  return (
    <li className={s.listItem}>
      <label className={s.itemLabel}>
        <input type="checkbox" className={s.checkbox}></input>
        <span className={s.itemText}>Задача</span>
      </label>
      <button className={s.deleteButton}>
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