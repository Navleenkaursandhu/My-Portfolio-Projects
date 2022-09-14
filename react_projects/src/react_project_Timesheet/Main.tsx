import { Header } from './Header'
import { Sheet } from './Sheet'
import './style.css'

export const Main = () => {
  return (
    <div className="timesheet-container">
    <Header/>
    <Sheet/>
    </div>
  )
}
