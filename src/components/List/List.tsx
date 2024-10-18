import TodoItem from '../TodoItem/TodoItem'
import s from './List.module.scss'

const List = () => {
  return (
    <ul className={s.list}>
      <TodoItem />
    </ul>
  )
}

export default List
