import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import s from './Filters.module.scss'
import { setSorting } from '../../store/slices/TodosSlice'
import { RadioButton as RadioButtonType } from '../../@types'
import RadioButton from '../RadioButton/RadioButton'

const Filters = () => {
  const sorting = useAppSelector((state) => state.todos.sorting)
  const dispatch = useAppDispatch()

  const radioButtons: RadioButtonType[] = [
    {
      labelText: 'Все',
      value: 'all',
    },
    {
      labelText: 'Активные',
      value: 'active',
    },
    {
      labelText: 'Завершённые',
      value: 'completed',
    },
  ]

  return (
    <>
      <div className={s.statusesContainer}>
        <span className={s.optionTitle}>Статус</span>
        <div className={s.buttonsContainer}>
          {radioButtons.map((button) => (
            <RadioButton {...button} />
          ))}
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
