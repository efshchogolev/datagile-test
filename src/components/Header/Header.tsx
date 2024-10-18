import { ChangeEvent, FormEvent, useState } from 'react'
import Icon from '../Icon/Icon'
import s from './Header.module.scss'
import { useAppDispatch } from '@/hooks/redux'
import { addTodo } from '@/store/slices/TodosSlice'

const Header = () => {
  const [text, setText] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addTodo({ id: new Date().toISOString(), text: text }))
    setText('')
  }

  const handleSetText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.search}>
          <span className={s.text}>Новая задача</span>
          <input
            className={s.input}
            value={text}
            onChange={handleSetText}
          ></input>
        </label>
        <button className={s.button}>
          <Icon width={20} height={20} name="add" /> Добавить
        </button>
      </form>
    </header>
  )
}

export default Header
