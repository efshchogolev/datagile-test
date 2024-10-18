import React, { ChangeEvent } from 'react'
import { RadioButton as RadioButtonProps } from '@/@types'
import s from './RadioButton.module.scss'
import { setFilter } from '@/store/slices/TodosSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'

const RadioButton = (props: RadioButtonProps) => {
  const { value, labelText } = props

  const dispatch = useAppDispatch()
  const filter = useAppSelector((state) => state.todos.filter)

  const handleSetFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ filter: e.target.value }))
  }

  return (
    <label className={s.radioLabel} key={value}>
      <input
        type="radio"
        name="status"
        value={value}
        id={value}
        className={s.radioButton}
        checked={filter === value}
        onChange={handleSetFilter}
      />
      <span className={s.text}>{labelText}</span>
    </label>
  )
}

export default RadioButton
