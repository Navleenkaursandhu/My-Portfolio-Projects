import { Header } from './Header'
import background from './assets/image.png'

export const Main = () => {
  return (
    <div className="h-[724px] bg-no-repeat bg-left-bottom font-applyDosis bg-[length:250px_600px]" style={{ backgroundImage: `url(${background})` }}>
      <Header />
    </div>
  )
}
