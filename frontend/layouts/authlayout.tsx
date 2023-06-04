import { ReactNode } from "react"

interface Props {
  children: ReactNode
}
const Authlayout = ({children}: Props) => {
  return (
    <div className="flex justify-center place-content-center">
      {children}
    </div>
  )
}

export default Authlayout
