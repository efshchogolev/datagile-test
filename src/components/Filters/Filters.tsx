import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import s from './Filters.module.scss'
import { setFilter, setSorting } from '../../store/slices/TodosSlice'

const Filters = () => {
  const filter = useAppSelector((state) => state.todos.filter)
  const sorting = useAppSelector((state) => state.todos.sorting)
  const dispatch = useAppDispatch()

  const handleSetFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ filter: e.target.value }))
  }
  return (
    <>
      <div className={s.statusesContainer}>
        <span className={s.optionTitle}>Статус</span>
        <div className={s.buttonsContainer}>
          <label className={s.radioLabel}>
            <input
              type="radio"
              name="status"
              value={'all'}
              id="all"
              className={s.radioButton}
              checked={filter === 'all'}
              onChange={handleSetFilter}
            />
            <span className={s.text}>Все</span>
          </label>
          <label className={s.radioLabel}>
            <input
              type="radio"
              name="status"
              id="active"
              className={s.radioButton}
              value={'active'}
              checked={filter === 'active'}
              onChange={handleSetFilter}
            />
            <span className={s.text}>Активные</span>
          </label>
          <label className={s.radioLabel}>
            <input
              type="radio"
              name="status"
              id="completed"
              className={s.radioButton}
              value={'completed'}
              checked={filter === 'completed'}
              onChange={handleSetFilter}
            />
            <span className={s.text}>Завершенные</span>
          </label>
        </div>
      </div>
      <div className={s.sortingContainer}>
        <span className={s.optionTitle}>Сортировка</span>
        <select
          name="sorting"
          id="sorting"
          className={s.select}
          value={sorting}
          onChange={(e) => {
            dispatch(setSorting({ sorting: e.target.value }))
          }}
        >
          <option value="status">Статус</option>
          <option value="name">Наименование</option>
        </select>
      </div>
    </>
  )
}

export default Filters
