import { useState } from 'react'
import Icon from '../Icon/Icon'
import s from './Header.module.scss'

// type Todo = {
// 	c
// }

const Header = () => {

	const [text,setText]=useState<string>('')
	const [todos,setTodos]=useState<[string]>([])
	return (
		<header className={s.header}>
			<form className={s.form}>
			<label className={s.search}>
				<span className={s.text}>Новая задача</span>
				<input className={s.input} value={text} onChange={(e)=>{setText(e.target.value)}}></input>
				</label>
				<button className={s.button}><Icon width={20}height={20} name='add'/> Добавить</button>
			</form>
		</header>
	)
}

export default Header