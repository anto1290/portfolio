import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
interface Props {
  children: ReactNode
}
const Utama = ({children}: Props) => {
  return (
    <div>
      <Navbar/>
      <section>
        <main>{children}</main>
      </section>
    </div>
  )
}

export default Utama
