import classNames from "classnames"
import { ReactNode } from "react"

interface Props {
   variant: 'default' | 'success' | 'danger' | 'warning'| 'info' | 'primary',
    size?: 'sm' | 'md' | 'lg' | 'xl'
    fluid?: boolean,
    children: ReactNode,
    rest?: any
}
const index = (Props : Props) => {
  
  const classes = {
      style: 'inline-block font-normal transition-colors ease-in-out duration-300',
  } 
  return (
    <div>
    <button className={[classes.style,classNames({
        'px-4 py-2 text-base': !Props.size || Props.size === 'md',
        'px-2 py-1 text-xs': Props.size === 'sm',
        'px-4 py-2 text-lg': Props.size === 'lg',
        'px-4 py-2 text-xl': Props.size === 'xl',
        'bg-slate-400 hover:bg-slate-300 rounded': !Props.variant || Props.variant === 'default',
        'bg-green-600 hover:bg-green-400 text-white rounded' : Props.variant === 'success',
        'bg-red-600 hover:bg-red-400 text-white rounded' : Props.variant === 'danger',
        'bg-yellow-500 hover:bg-yellow-400 text-white rounded' : Props.variant === 'warning',
        'bg-sky-500 hover:bg-sky-400 text-white rounded' : Props.variant === 'info',
        'bg-blue-600 hover:bg-blue-500 text-white rounded' : Props.variant === 'primary',
        'w-full' : Props.fluid === true
      })].join(' ')}>
      {Props.children}
    </button>
    </div>
  )
}

export default index
