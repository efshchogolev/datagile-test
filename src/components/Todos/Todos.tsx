import Filters from '../Filters/Filters'
import List from '../List/List'
import s from './Todos.module.scss'

const Todos = () => {
	return (
		<div className={s.todos}>
			<h1 className={s.title}>Список задач</h1>
			<div className={s.mainContainer}>
				<div className={s.tasksContainer}>
					<List />
				</div>
				<div className={s.settingsContainer}>
					<Filters />
				</div>
			</div>
		</div>
	)
}

export default Todos