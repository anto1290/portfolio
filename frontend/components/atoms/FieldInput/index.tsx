
interface Props {
  label: string
  type: 'text' | 'password' | 'tel' | 'number'
  min?: number
  max?: number
  placeholder: string
  value: any
  onChange: any
}
const index = (Props: Props) => {
  return (
    <div>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor={Props.label}>
          {Props.label}
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id={Props.label} type={Props.type} placeholder={Props.placeholder} value={Props.value} onChange={Props.onChange}/>
      </div>
    </div>
  )
}

export default index
