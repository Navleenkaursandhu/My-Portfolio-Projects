import { Information } from './Information'
import { Card } from './card1/Card'
export const Main = () => {
  return (
    <div className="border-black border flex h-[48rem] mt-3 gap-4 p-4">
    <Information/>
    <Card/>
    </div>
  )
}
