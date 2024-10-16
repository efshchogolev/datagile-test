/// <reference types="vite-plugin-svgr/client" />
import Delete from '../../icons/delete.svg?react'
import Add from '../../icons/add.svg?react'

 type IconProps = {
		name: 'delete'|'add'
		className?: string
		width: number
		height: number
	}

const Icon = (props: IconProps) => {
	const iconProps = {
    className: props.className,
    width: props.width,
    height: props.height,
  }
	switch (props.name) {
		case 'delete': {
			return <Delete {...iconProps} />
		}
		case 'add': {
			return <Add {...iconProps} />
		}
			default: return null
	}
}

export default Icon