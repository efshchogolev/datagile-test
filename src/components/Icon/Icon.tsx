/// <reference types="vite-plugin-svgr/client" />
import Delete from '@/icons/delete.svg?react'
import Add from '@/icons/add.svg?react'
import { IconProps } from '@/@types'

const Icon = (props: IconProps) => {
  switch (props.name) {
    case 'delete': {
      return <Delete {...props} />
    }
    case 'add': {
      return <Add {...props} />
    }
    default:
      return null
  }
}

export default Icon
