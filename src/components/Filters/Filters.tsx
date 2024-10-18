import s from './Filters.module.scss'

const Filters = () => {
  return (
    <>
      <div className={s.statusesContainer}>
        <span className={s.optionTitle}>Статус</span>
        <div className={s.buttonsContainer}>
          <label htmlFor="" className={s.radioLabel}>
            <input
              type="radio"
              name="status"
              id=""
              className={s.radioButton}
              defaultChecked
            />
            <span className={s.text}>Все</span>
          </label>
          <label htmlFor="" className={s.radioLabel}>
            <input type="radio" name="status" id="" className={s.radioButton} />
            <span className={s.text}>Активные</span>
          </label>
          <label htmlFor="" className={s.radioLabel}>
            <input type="radio" name="status" id="" className={s.radioButton} />
            <span className={s.text}>Завершенные</span>
          </label>
        </div>
      </div>
      <div className={s.sortingContainer}>
        <span className={s.optionTitle}>Сортировка</span>
        <select name="" id="" defaultValue={'name'} className={s.select}>
          <option value="status">Статус</option>
          <option value="name">Наименование</option>
        </select>
      </div>
    </>
  )
}

export default Filters
